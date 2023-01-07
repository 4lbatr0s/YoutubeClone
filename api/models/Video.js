import mongoose from "mongoose";

//INFO: user is both an user and a channel.
const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    videoTitle:{
        type:String,
        required:true,
    },
    imgUrl:{ //TIP:Thumbnail
        type:String,
        required:true,
    },
    videoURL:{
        type:String,
        required:true, 
    },
    views:{
        type:number,
        required:true,
        default:0,
    },
    videoTags:{
        type:[String],
        default:[],
    },
    likes:{
        type:[String], //INFO: they're gonna be userIDs.,
        default:[],
    },
    dislikes:{
        type:[String], //INFO: they're gonna be userIDs.,
        default:[],
    },

}, {timestamps:true}) //INFO: timestamps: CreatedAt, UpdatedAt 


export default mongoose.model("Video", VideoSchema);