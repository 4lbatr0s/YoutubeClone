import mongoose from "mongoose";

//INFO: user is both an user and a channel.
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String]
    }
}, {timestamps:true}) //INFO: timestamps: CreatedAt, UpdatedAt 


export default mongoose.model("User", UserSchema);