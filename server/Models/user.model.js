import mongoose from 'mongoose';


//create user schema

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    default:"user",
  }
},{timestamps:true});

//create user model

const User = mongoose.model('User',userSchema);

export default User;
