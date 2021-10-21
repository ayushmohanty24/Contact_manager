const mongoose= require('mongoose');

const contactSchema = mongoose.Schema({
    contactName:{
        type:String,
        required:true
    },
    contactEmail:{
        type:String,
        required:true
    },
    contactPhone:{
        type:String,
        required:true
    },
    contactPhone:{
        type:String,
        required:true
    },
    contactType:{
        type:String,
        required:true
    },
    contactUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
});

module.exports=mongoose.model('contact',contactSchema);