import mongoose from "mongoose";
import validator from "validator";
const jobSchema = new mongoose.Schema({
    compnay:{
        type:String,
        required:[true,'company name is required']
    },
    position:{
        type:String,
        required:[true,'Job postion is required'],
        minlength:100
    },
    status:{
        type:String,
        enum:['pending','reject','interview'],
        default:'pending'
    },
    workType:{
        type:String,
        enum:['full-time','part-time','internship','contract'],        
        default:'full-time'
    },
    workLocation:{
        type:String,
        default:'Jaipur',
        required:[true,'Work location is required']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true}
);



export default mongoose.model('Job',jobSchema);