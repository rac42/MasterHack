import User from "../Models/user.model.js";
import { errorHandler } from "../Utils/Error.js";
import dotenv from 'dotenv'
import bcryptjs from 'bcryptjs'

dotenv.config();

export const signup = async (req,res,next) => {
    const {Name, email, password} = req.body;

    if(!Name || !email || !password){
        next(errorHandler(400,"All fields are required"))
    }

    // const salt_rounds = process.env.SALT_ROUND;
    // console.log(salt_rounds)

    // const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User ({Name,email,password});

    try{
        await newUser.save();
        res.json("sign up successfull!!!");
    }catch (err){
        next(err);
    }

};