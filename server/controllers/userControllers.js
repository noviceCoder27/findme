import validator from "validator";
import User from "../models/user.js"
import { generateHash, verifyPassword } from "../utils/encryptPassword.js";
import { generateToken } from "../utils/generateToken.js";



export const listAllUsers = async(req,res) => {
    const users = await User.find({});
    const requiredFields = users.map(user => (
    {   firstName: user.firstName,
        lastName:user.lastName,
        email: user.email,
        userName: user.userName
    }));
    res.status(200).json(requiredFields);
}

export const getUserDetails = async (req,res) => {
    const {userName} = req.params;
    const userDetails = await User.findOne({userName});
    res.status(200).json(userDetails);
}

export const getProfilePic = async (req, res) => {
    const { userName } = req.params;
    const user = await User.findOne({userName});
    if (!user || !user.profilePic || !user.profilePic.data) {
        return res.status(404).json({ msg: 'User or profile picture not found' });
    }
    res.set('Content-Type', user.profilePic.contentType);
    res.send(user.profilePic.data);
}

export const createUser = async (req,res,next) => {
    const {
        firstName,
        lastName,
        bio,
        description,
        userName,
        email,
        password,
        location,
        dateOfBirth,
        career,
        qualifications
    } = req.body;

    if (!validator.isEmail(email)) {
        const error = new Error();
        error.status = 400;
        error.msg = "Enter a valid email";
        next(error);
    }
    const hash = await generateHash(password);
    const findUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (findUser) {
        const error = new Error();
        error.status = 400;
        error.msg = "User already exists";
        next(error);
    }
    let profilePicData = null;
    if (req.file) {
        profilePicData = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }
    const name = userName.trim();
    const emailStr = email.split("@")[1];
    const userRole = emailStr.includes("admin") ? "admin" : "user";
    const qualificationsObj = JSON.parse(qualifications);
    const careerObj = JSON.parse(career);
    const user = new User({
        firstName,
        lastName,
        bio,
        description,
        profilePic: profilePicData,
        userName: name,
        email,
        role: userRole,
        password: hash,
        location,
        dateOfBirth,
        career: careerObj,
        qualifications: qualificationsObj
    });
    await user.save();
    const isAdmin = user.role === "admin";
    const token = generateToken(user._id, isAdmin);
    res.status(201).json({ msg: "User created successfully", token, role: user.role});
}

export const login = async (req,res,next) => {
    const {userName,password} = req.body;
    const user = await User.findOne({userName});
    if(!user) {
        const error = new Error();
        error.status = 404;
        error.msg = "User doesnt't exist";
        next(error)
    }

    const verify = await verifyPassword(password,user.password);
    const isAdmin = user.role === "admin";
    const token = generateToken(user._id,isAdmin);
    if(verify) {
        res.status(201).json({msg: "User logged in",token,role: user.role});
    } else {
        const error = new Error();
        error.status = 400;
        error.msg = "Incorrect Password"
        next(error);
    } 
}

export const deleteUser = async (req,res) => {
    const {id: _id} = req.params;
    await User.findByIdAndDelete(_id);
    res.status(201).json({msg: "User deleted successfully"});
}

export const updateUser = async (req,res) => {
    const {id: _id} = req.params;
    const updatedUser = req.body;
    if(updatedUser?.userName || updatedUser?.email) {
        const query = {};
        if(updatedUser.userName) query.userName = updatedUser.userName;
        if(updatedUser.email) query.email = updateUser.email;
        const existingUser = await User.findOne(query);
        if(existingUser) {
            return res.status(400).json({msg: "User with this username/email already exists"});
        }
    }
    await User.findByIdAndUpdate(_id,updatedUser,{new: true});
    res.status(201).json({msg: "User updated successfully"});
}
