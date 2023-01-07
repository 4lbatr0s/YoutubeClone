import bcrypt from "bcryptjs";
import { text } from "express";

export const saltRounds = 10;

export const hashPassword =  (textPassword) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(textPassword, salt);
        return hash;
    } catch (error) {
        throw error;
    }
}