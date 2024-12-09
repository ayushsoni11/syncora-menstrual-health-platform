import {User} from '../models/userSchema.js';
import jwt from "jsonwebtoken";
import { catchAsyncErrors } from './catchAsyncErrors.js';
import ErrorHandler from './error.js';

export const isAuthenticated = catchAsyncErrors(async(req,res,next)=>{
    // Need to access the token created at the time user logged in 
    const token = req.cookies.token; // yeh cookie-parser package ki wajah se ho pa rha hai 

    if(!token) {
        //user logged in nhi hai
        return next(new ErrorHandler("User not authenticated", 400))
    }

    // it will verify that ye jo token generate hua hai ye isi secret key se hi hua hai na 
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //req.user ke andar humne apne user ko find kiya by id
    req.user = await User.findById(decoded.id);
    next();
})