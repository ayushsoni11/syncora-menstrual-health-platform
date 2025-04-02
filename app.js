import express from 'express';
import { config } from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { connection } from './database/connection.js';
import { errorMiddleware } from './middlewares/error.js';
import userRoute from "./router/userRoute.js";
import ejs from 'ejs';
import { SymptomSolution } from './models/symptomSolutionSchema.js';
import path from "path";
import { fileURLToPath } from "url";
import ejsMate from 'ejs-mate';
import passport from 'passport';
import LocalStratergy from 'passport-local';
import session from 'express-session';
import flash from "connect-flash";
import { User } from './models/userSchema.js';


// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config ({
    path : "./config/config.env",
});


const app = express();

app.use(
    cors({
    origin : process.env.FRONTEND_URL,
    methods : ["POST", "PUT", "GET", "DELETE"],
    credentials : true
})
)

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.use(
    fileUpload({
        useTempFiles : true,
        tempFileDir : "/tmp/",

}));

// Main route
app.get('/', (req,res)=>{
    res.render("intro");
})

// Express session

const sessionOptions = {
    secret: "mysecretkeythatnooneknowsabout", // Replace with a secure secret
    resave: false,             // Prevents resaving unchanged sessions
    saveUninitialized: false,  // Does not save uninitialized sessions
    cookie: {  
        expires : Date.now() + 7 *24* 60* 60 * 1000,               
        maxAge:7 *24* 60* 60 * 1000,  
        httpOnly: true, 
    }
}
app.use(session(sessionOptions));

//Connect Flash
app.use(flash());

// using passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Calling middleware for flash
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    console.log("main yahan 1")
    next();
});



app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);

connection();
app.use(errorMiddleware);

app.use('/', userRoute); 

app.get('/readmore', (req, res) => {
    res.render("readmore");
});

app.get('/period-calculator', (req,res)=>{
    res.render('features/calculator')
});

app.get('/services', (req,res)=>{
    res.render('readmore');
})

app.get('/education', (req,res)=>{
    res.render('features/education');
})

app.get('/symptoms', async (req, res) => {
    console.log("4")
    try {
        console.log("1")
        const allSymptoms = await SymptomSolution.find({});
        console.log("Fetched Data:", allSymptoms);  
        console.log("2")

        if (!allSymptoms || allSymptoms.length === 0) {
            console.log("No symptoms found in the database.");
            return res.status(404).send("No symptoms found.");
        }

        res.render("features/symptom", { allSymptoms }); // Correct usage
        console.log("3")
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.get("/symptoms/:id", async (req, res) => {
    let { id } = req.params;
    const symptom = await SymptomSolution.findById(id);
    if(!symptom) {
        req.flash("error", "This is symptom is not in our website");
        res.redirect("features/symptom");
    }
    res.render("features/show", { symptom });
});

app.get('/community', async(req,res)=>{
    res.render("features/community")
})

export default app;