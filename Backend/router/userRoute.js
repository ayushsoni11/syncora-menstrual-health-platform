import {getProfile, register, login, logout} from "../controllers/userController.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get('/me', isAuthenticated ,  getProfile); 
router.get('/logout', isAuthenticated, logout);

router.get('/register', (req,res)=>{
    res.render('users/register');
});

router.post('/register', register);

router.get('/login', (req,res)=>{
    res.render('users/login');
});

router.post('/login' , login);

export default router;