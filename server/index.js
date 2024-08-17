import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from '../server/Routes/user.route.js'
import authRoutes from '../server/Routes/auth.route.js'

dotenv.config();


mongoose
  .connect("mongodb+srv://gaikwadrushi7898:team16mastercard@team16.u7ljb.mongodb.net/?retryWrites=true&w=majority&appName=Team16")
  .then(() => {
    console.log("Database is connected!!!");
  })
  .catch((error) => {
    console.log("error : " + error);
  });

const app = express();

app.use(express.json());

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