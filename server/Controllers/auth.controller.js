import User from "../Models/user.model.js";
import { errorHandler } from "../Utils/Error.js";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import cloudinary from 'cloudinary';
import { fileURLToPath } from 'url';

dotenv.config();

function generateProfilePicture(letter) {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Background color
  ctx.fillStyle = '#007bff';
  ctx.fillRect(0, 0, 200, 200);

  // Text settings
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 100px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(letter, 100, 100);

  return canvas.toBuffer();
}

async function uploadToCloudinary(file, folder, quality) {
  const options = { folder };
  options.resource_type = "auto";

  if (quality) {
    options.quality = quality;
  }

  try {
    const result = await cloudinary.uploader.upload(file, options);
    return result;
  } catch (error) {
    console.log('Cloudinary Upload Error:', error);
    throw error;
  }
}


export const signup = async (req, res, next) => {
  const { Name, email, password } = req.body;

  if (!Name || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  const firstLetter = Name.charAt(0).toUpperCase();

  const profilePicture = generateProfilePicture(firstLetter);

  // Save the image to a file or to the database
  const fileName = `${firstLetter}.png`;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, '..', 'uploads', fileName);
  fs.writeFileSync(filePath, profilePicture);

  const response = await uploadToCloudinary(filePath, "FileFolder");
  console.log(response);

  // const salt_rounds = process.env.SALT_ROUND;
  // console.log(salt_rounds)

  // const hashedPassword = bcryptjs.hashSync(password,10);
  // console.log(1);
  const newUser = new User({ Name, email, profilePicture: response.secure_url, password });
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

    const validPass = (password === validUser.password);

    if (!validPass) {
      return next(errorHandler(400, "Not a valid user!!!"));
    }

    const token = jwt.sign(
      {
        id: validUser._id,
        role: validUser.role
      },
      "team16"
    );

    const { password: pass, ...rest } = validUser._doc;

    res.status(200)
      .cookie('access_token', token, { httpOnly: true })
      .json(validUser);

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
