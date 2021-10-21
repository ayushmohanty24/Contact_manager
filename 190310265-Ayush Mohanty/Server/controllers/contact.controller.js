const contact = require('../models/contact');
const Joi = require('joi');

exports.getContact = async(req, res)=> {
    try {
        const contacts = await contact.find().populate('contactUserId');
        if(contacts.length!==0){
            console.log(contacts)
            res.status(200).json({
                message:"ContactList fetched successfully",
                contactData:contacts
            })
        }else{
            res.status(404).json({
                message:"Not found",
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
    
}

exports.addContact=async(req,res)=>{
    console.log(req.body);
    const contactObj =Joi.object({
        contactName : Joi.string().required().min(3).alphanum(),
        contactEmail : Joi.string().email().required(),
        contactPhone : Joi.string().length(10).required(),
        contactType : Joi.string().required(),
        contactUserId : Joi.string().required()
    })
    try {
        const contactfield = await contactObj.validateAsync(req.body);
        const contacts = new contact(contactfield);
        console.log(contacts);
        await contacts.save();
        res.status(200).json({
            message:"contact fetched successfully" ,
            contactData:contacts
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}

exports.updateById=async(req,res)=>{
    const id = req.params.id;
    const contactObjs =Joi.object({
        contactName : Joi.string().required().min(3).alphanum(),
        contactEmail : Joi.string().email().required(),
        contactPhone : Joi.string().length(10).required(),
        contactType : Joi.string().required()
    })
    try {
        const updatefield = await contactObjs.validateAsync(req.body);
        const updatedcontact = await contact.findByIdAndUpdate(id,{$set:updatefield},{useFindAndModify: false});
        if(updatedcontact!=null){
            res.status(200).json({
                message:"contact updated successfully",
                updatedcontact:updatedcontact
            })
        }else{
            res.status(400).json({
                message:"contact did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
}

exports.deleteById=async(req, res)=>{
    const id = req.params.id;
    try {
        const deletedContact = await contact.findByIdAndDelete(id);
        if(deletedContact==null){
            res.status(400).json({
                message:"contact did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"contact deleted successfully",
                deletedContact:deletedContact
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}

exports.deleteByMail=async(req, res)=>{
    const email = req.params.email;
    try {
        const deletedContact = await contact.findOneAndDelete(email);
        if(deletedContact==null){
            res.status(400).json({
                message:"contact did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"contact deleted successfully",
                deletedContact:deletedContact
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}

exports.updateByMail=async(req,res)=>{
    const Email = req.params.email;
    const contactObjs =Joi.object({
        contactName : Joi.string().required().min(3).alphanum(),
        contactEmail : Joi.string().email().required(),
        contactPhone : Joi.string().length(10).required(),
        contactType : Joi.string().required()
    })
    try {
        const updatefields = await contactObjs.validateAsync(req.body);
        const updatedcontact = await contact.findOneAndUpdate(Email,{$set:updatefields},{useFindAndModify: false});
        if(updatedcontact!=null){
            res.status(200).json({
                message:"contact updated successfully",
                updatedcontact:updatedcontact
            })
        }else{
            res.status(400).json({
                message:"contact did'nt updated successfully/ID not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }  
}

exports.getUserContact=async (req,res)=>{
    try {
        const user =await contact.find({contactUserId:req.params.contactId}).populate('contactUserId');
        console.log(user);
        if(user.length!==0){
            console.log(user);
            res.status(200).json({
                message:"ContactList fetched successfully",
                contactData:user
            })
        }else{
            res.status(404).json({
                message:"Not found",
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}