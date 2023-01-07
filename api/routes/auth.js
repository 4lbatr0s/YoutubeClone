import express from "express";
import * as authController from "../controllers/auth.js"
const router = express.Router();



//CREATE A USER,
router.post('/signup', authController.signUp);
router.post('/signin',);
router.post('/google',);


//SIGN IN
//GOOGLE AUTH

export default router;