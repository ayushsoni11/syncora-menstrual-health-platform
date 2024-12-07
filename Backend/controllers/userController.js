import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js"
import { User } from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";
import { generateToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {

    if (!req.files || Object.keys(req.files).length === 0) { //if requests mein file nhi hui ya phir file toh hai pr usme object ki length 0 hai toh 

        return next(new ErrorHandler("Profile Image Required", 400));
    }


    const { profileImage } = req.files;


    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];


    if (!allowedFormats.includes(profileImage.mimetype)) {
        return next(new ErrorHandler("File Format is not supported", 400));
    }


    // Getting the text type data from request
    const { username,
        firstname,
        lastname,
        password,
        emailaddress,
        phone,
        age, } = req.body;

    if (!username || !password || !emailaddress || !age || !phone || !firstname || !lastname) {
        return next(new ErrorHandler("Please fill form completely !!", 400));
    }


    //Check is user already registered
    const isRegistered = await User.findOne({ emailaddress });
    if (isRegistered) {
        return next(new ErrorHandler("User is already registered !!", 400));
    }


    // User ki profile cloudinary pe upload krwa dete hain
    const cloudinaryResponse = await cloudinary.uploader.upload(profileImage.tempFilePath, {
        folder: "SYNCORA_USERS"
    });


    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error("Cloudinary error : ", cloudinaryResponse.error || "Unknown Cloudinary Error");
        return next(new ErrorHandler("Failed to upload profile image", 500));
    }

    // If we reached here mtlb abhi tak koi error nhi aaya hai and user ne apni saari details bhar di hain

    // Now let's store it in database
    const user = await User.create({
        username,
        password,
        emailaddress,
        phone,
        age,
        firstname,
        lastname,
        profileImage: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        },
    });


    //Checking our code working properly or not
    // res.status(201).json({
    //     success: true,
    //     message: "User registered successfully"
    // });

    generateToken(user, "User registered successfully", 201, res);
});

export const login = catchAsyncErrors(async(req,res,next)=>{

    const {emailaddress, password} = req.body;

    if(!emailaddress || !password){
    return next(new ErrorHandler("Please fill all details", 400));
    }

    //Does user exist for this email
    const user = await User.findOne({emailaddress}).select("+password");
    if(!user) {
        return next(new ErrorHandler("Invalid Credentials", 400));
    }

    // Email shi hai ab password match krna hai
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched) {
        return next(new ErrorHandler("Wrong Password", 400));
    }

    // Now user logged in successfully toh token generate karado
    generateToken(user, "Logged in successfully", 200, res);
});

export const logout = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("token", "", {
        expires : new Date(Date.now()),
        httpOnly : true,
    }).json({
        success : true,
        message : "Logged out successfully"
    })
});

export const getProfile = catchAsyncErrors(async(req,res,next)=>{
    const user = req.user;
    res.status(200).json({
        success : true,
        user
    });
});