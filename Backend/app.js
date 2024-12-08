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

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




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

app.use('/api/v1/user', userRoute);

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

// app.engine("ejs", ejsMate);

connection();
app.use(errorMiddleware);

config ({
    path : "./config/config.env",
});

app.get('/', (req, res) => {
    res.render("intro")
});

app.get('/home', (req, res) => {
    res.render("home")
});

app.get('/readmore', (req, res) => {
    res.render("readmore");
});

app.get('/symptoms', async (req, res) => {
    try {
        const allSymptoms = await SymptomSolution.find({});
        res.render("symptoms/symptom", { allSymptoms }); // Correct usage
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.get("/symptoms/:id", async (req, res) => {
    console.log("under get request");
    let { id } = req.params;
    const symptom = await SymptomSolution.findById(id);
    res.render("symptoms/show", { symptom });
});


export default app;