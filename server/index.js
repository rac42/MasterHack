import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from '../server/Routes/user.route.js'
import authRoutes from '../server/Routes/auth.route.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cloudinary from 'cloudinary';
import fileuPload from 'express-fileupload'

dotenv.config();
const s='mongodb+srv://gaikwadrushi7898:team16mastercard@team16.u7ljb.mongodb.net/?retryWrites=true&w=majority&appName=Team16';
mongoose
  .connect("mongodb://localhost:27017/MasterCard")
  .then(() => {
    console.log("Database is connected!!!");
  })
  .catch((error) => {
    console.log("error : " + error);
  });

  const cloudinaryConnect = () =>{
    try {

        cloudinary.config({
            cloud_name:'dtobcdrww',
            api_key:'988281658147778',
            api_secret:'InjpwEKoNtJtcqOd5Uvf0ZTsD-8'
        })
        
    } catch (error) {
        console.log(error); 
    }
}

cloudinaryConnect();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/', express.static(path.join(__dirname,'uploads')));
console.log((path.join(__dirname,'uploads')));
app.use(express.json());
app.use(fileuPload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

app.listen(4000, () => {
  console.log("app is listening on port 4000");
});

app.use('/server/user',userRoutes)
app.use('/server/auth',authRoutes)


//middleware for error handling
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

// git checkout -b main2
// git add D:\master
