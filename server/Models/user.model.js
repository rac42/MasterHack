import mongoose from 'mongoose';

//create user schema

// om Kumava

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
  profilePicture: {
    type: String,
    default:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
  },
  role:{
    type:String,
    default:"user",
  }
},{timestamps:true});

//create user model

const User = mongoose.model('User',userSchema);

export default User;
