// require('dotenv').config({path: "./env"}) // to use the .env file
// we can use this syntax also `require('dotenv').config();` or `require('dotenv').config({path: "./config.env"})`

import dotenv from "dotenv";

import connectDB from "./db";

dotenv.config({
    path: "./config.env"
})





















/*
we can write all here like this or we can write it in a separate file like above. 

import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";
const app = express();

// we use semicolon in front of async to avoid error `IIFE` there is no semicolon at the end of the line
;(async () => {
    try{
        await mongoose.connect('${process.env.MONGO_URL}/${process.env.DB_NAME}')
        app.on("error",() => {
            console.log("ERRR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log("Error", error)
        throw err
    }
})();
*/