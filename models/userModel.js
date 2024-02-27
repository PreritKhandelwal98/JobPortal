import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        validate: validator.isEmail
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[6,'Password shoud be 6 character long'],
        select:true
    },
    location:{
        type:String,
        default:'Jaipur'
    }
},{timestamps:true}
);

userSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function(userPassword){
    const isMatch = await bcrypt.compare(userPassword,this.password)
    return isMatch;
}

//JSON webtoken
userSchema.methods.createJWT = function(){
    return JWT.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1h'})
}

export default mongoose.model('User',userSchema);