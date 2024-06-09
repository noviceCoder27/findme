import  { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {type: String, required: true,unique: true},
    userName: {type: String, required: true},
    role: {type: String,required: true,enum: ["user","admin"],default: "user"},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    profilePic: {
        data: Buffer,
        contentType: String
    },
    bio: {type: String, required: true},
    description: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    location: {type: String, required: true},
    qualifications: {type: [Object], default: []},
    career: {type: [Object],default: []}
},{timeStamps: true});

const User = model("User", UserSchema); 

export default User;