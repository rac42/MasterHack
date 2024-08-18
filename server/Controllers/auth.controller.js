import User from "../Models/user.model.js";
import { errorHandler } from "../Utils/Error.js";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

export const signup = async (req, res, next) => {
  const { Name, email, password } = req.body;

  if (!Name || !email || !password) {
    next(errorHandler(400, "All fields are required"));  
  }

  // const salt_rounds = process.env.SALT_ROUND;
  // console.log(salt_rounds)

  // const hashedPassword = bcryptjs.hashSync(password,10);
  // console.log(1);
  const newUser = new User({ Name, email, password });
  // console.log(2);
  try {
    // console.log(3);
    await newUser.save();
    res.json("sign up successfull!!!");
  } catch (err) {
    // console.log(4);
    next(err);
  }
};

export const signin = async (req, res, next) => {
//   console.log(1)
  const { email, password } = req.body;
//   console.log(req.body)

  if (!email || !password || email === "" || password === "") {
    // console.log(2)
    return next(errorHandler(400, "All fields are requiered !!!"));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(400, "Not a valid user!!!"));
    }

    const validPass = (password===validUser.password);

    if (!validPass) {
      return next(errorHandler(400, "Not a valid user!!!"));
    }

    const token = jwt.sign(
      {
        id: validUser._id,
        role : validUser.role
      },
      "team16"
    );

    const {password: pass, ...rest} = validUser._doc;

    res.status(200)
        .cookie('access_token',token,{httpOnly:true})
        .json(rest);

  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  // console.log(1)
  const { Name, email, googlePhotoUrl } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      // console.log(2)
      const token = jwt.sign(
        {
          id: user._id,
        },
        "team16"
      );

      const { password, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      // console.log(3)
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        Name:
          Name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        {
          id: user._id,
        },
        "team16"
      );

      const { password, ...rest } = user._doc;

      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
