import mongoose from "mongoose";
import logger from "./logger.js";
import vars from "./vars.js";

//set mongoose Promise to bluebird INFO: You should install bluebird package for this.
mongoose.Promise = Promise;

//Exit application on an error
mongoose.connection.on('error', (err)=>{
    logger.error(`MongoDB connection error:${err}`);
    process.exit(-1);
});

//print mongoose logs in dev env
if(vars.env ==='development'){
    mongoose.set('debug', true);
}

/**
 * Connect to mongodb.
 * 
 * @returns {object} Mongoose connection.
 * @public
 */

export default connect = () => {
    mongoose
        .connect(vars.mongo.uri, {
            useCreateIndex:true,
            keepAlive:1,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAnyModify:false
        })
        .then(()=> console.log('mongoDB connected...'));
    return mongoose.connection;
}