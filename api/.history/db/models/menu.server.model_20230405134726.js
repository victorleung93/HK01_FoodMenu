const mongoose=require('mongoose');

const Schema = new mongoose.Schema({

    username:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String, 
        require:true, 
        unique: true
    }
    
})

const signUp=mongoose.model('signUp',signUpSchema);

module.exports={signUp}






