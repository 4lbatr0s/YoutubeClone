import mongoose from "mongoose" //INFO: If you're gonna make any request to mongodb, your requests should be async.
import User from "../models/User.js";
import { hashPassword } from "../helpers/encryption.js";

export const signUp = async (req,res, next) =>{
    try {
        const hashedPassword = hashPassword(req.body.password);
        const newUser = new User({...req.body, password:hashedPassword});
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        //TIP: global error handling middleware.
        next(); 
    }
}

