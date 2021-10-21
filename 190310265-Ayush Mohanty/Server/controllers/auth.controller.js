const user = require("../models/auth");
const bcrypt = require('bcryptjs');
const Joi = require('joi');
var jwt = require('jsonwebtoken');
const secretKey="ayushmohanty";

exports.signIN=async (req,res)=>{
    const loginSchema = Joi.object({
        email:Joi.string().required(),
        password:Joi.string().required()
    })
    try{
        console.log('hello');
        const loginfield = await loginSchema.validateAsync(req.body);
        const userData = await user.findOne({email : loginfield.email});
        console.log(userData);
        if(!userData){
            console.log(userData)
            res.status(400).json({
                message : "username/password not found",
            });
        }
        else{
            const is_match = await bcrypt.compare(loginfield.password,userData.password);
            if (!is_match) {
                res.status(400).json({
                    message : "username/password not found",
                });
            } else {
                const payload={
                    userdata:{
                        id:userData._id
                    }
                }
                const token = await jwt.sign(payload,secretKey,{expiresIn:7200})
                res.status(200).json({
                    message : "Logged In",
                    userData:{id:userData._id,name:userData.name},
                    token
                });

            }
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "something went wrong",
            error : err
        });
    }
}

exports.signUp=async (req,res)=>{
    const userObj=Joi.object({
        name:Joi.string().required().min(3).alphanum(),
        email:Joi.string().email().required(),
        password:Joi.string().required().min(6).max(20)
    })
    try{
        let userobject = await userObj.validateAsync(req.body);

        let userauth= await user.findOne({email:userobject.email});
        if (!userauth) {
            let newuser = new user(userobject);
            const salt = await bcrypt.genSaltSync(10);
            newuser.password =await bcrypt.hash(newuser.password,salt);
            await newuser.save();
            res.status(200).json({
                message : "User created successfully",
                newuser
            });
        } else {
            res.status(400).json({
                message : "Already exists",
            });
        }
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message : "Something went wrong",
            error : err
        });
    }
}