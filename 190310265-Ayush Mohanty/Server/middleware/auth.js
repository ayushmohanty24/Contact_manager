const jwt = require("jsonwebtoken");
const secretKey = "ayushmohanty";

const auth = async(req,res,next)=>{
    if(req.header("x-auth-token")){
        let token = req.header("x-auth-token");
        try{
            await jwt.verify(toke,secretKey);
            console.log("Token Valid\n"+data);
            next();
        }catch(err){
            res.status(401).json({
                message : "Unauthorized request!! Bad token",
                error:true
            })
        }
    }else{
        res.status(401).json({
            message : "Unauthorized request!! Token missing",
            error:true
        });
    }
}

module.exports = auth;