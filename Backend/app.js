import express from 'express';
import { config } from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { connection } from './database/connection.js';
import { errorMiddleware } from './middlewares/error.js';
import userRoute from "./router/userRoute.js";

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

app.use(
    fileUpload({
        useTempFiles : true,
        tempFileDir : "/tmp/",

}));

app.use('/api/v1/user', userRoute);

connection();
app.use(errorMiddleware);

config ({
    path : "./config/config.env",
});

export default app;