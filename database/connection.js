import mongoose from "mongoose";
import dotenv from 'dotenv';




export const connection = ()=>{
    mongoose.connect( 'mongodb+srv://ayushsoni:wGV1Bai0uE1FeBNE@cluster0.vcjsavt.mongodb.net/' , {
        dbName : "SYNCORA_TWO",
    }).then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(`Error occured ${err}`);
    })
}