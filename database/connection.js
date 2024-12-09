import mongoose from "mongoose";
import dotenv from 'dotenv';




export const connection = ()=>{
    mongoose.connect( 'mongodb://127.0.0.1:27017' , {
        dbName : "SYNCORA_TWO",
    }).then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(`Error occured ${err}`);
    })
}