const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "name is required"],
    maxLength: [50, "max lenth username less than 50"],
    unique: [true, "user name is already taken "],
    index: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "email is required "],
    unique: [true, "alredy  registered"],
    lowercase: true,
  },
  profile: {
    type: String,
    require: [true, "profile is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  salt: {
    type: Number,
  },
  about : {
    type : string 
  } ,
  role : {
    type : Number  ,
    trim : true
  } ,
  photo : {
    type : Buffer ,
    contentType : String 
  } ,
  resetPasswordLink  : {
    data : String ,
    default : '' 
  }
} , {timestamps : true });

module.exports = mongoose.model("User", userSchema);