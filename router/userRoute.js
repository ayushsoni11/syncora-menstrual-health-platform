import { getProfile, register, login, logout } from "../controllers/userController.js";
import express from "express";
import { isLoggedin, saveRedirectUrl } from "../middlewares/auth.js";
import { User } from "../models/userSchema.js"
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import passport from "passport";

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsyncErrors(async (req, res) => {
    try {
        let { emailaddress, username, password, age, phone, firstname, lastname } = req.body;
        const newUser = new User({ emailaddress, username, age, phone, firstname, lastname });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Syncora");
            res.redirect('/home');
        })


    } catch (e) {
        req.flash("error", e.message);
        res.redirect('/register')
    }

}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), catchAsyncErrors(async (req, res) => {
   
    req.flash("success", "Welcome to Syncora, you are logged in");
    let redirectUrl = res.locals.redirectUrl || "/home";
    res.redirect(redirectUrl);
    
}));

router.get('/logout', (req, res) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out successfully");
        res.redirect('/login');
    })
});

router.get('/me', getProfile);


router.get('/home', isLoggedin, (req, res) => {
    res.render('home');
});

export default router;