// require('dotenv').config({path: "./env"}) // to use the .env file and it variables as we want the variables as they are required almost everywhere so we want to be avaialbe as soon as the file is started as this is the entry point. this method can be used to do that but is not used as it decreases the consistency of the file. 
// we can use this syntax also `require('dotenv').config();` or `require('dotenv').config({path: "./config.env"})`

import dotenv from "dotenv"; // this is the best practice of it

import connectDB from "./db/index.js";

dotenv.config({ // still not updated in the document but we can use this as a experimental feature by mentioning it in the package.json 
    // "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
    path: "./config.env"
})




















/*
we can write all here like this or we can write it in a separate file like above. we will write this in index.js under DB folder

import mongoose from "mongoose";
import {DB_NAME} from "./constants";

import express from "express";
const app = express();

// we use semicolon in front of async to avoid error `IIFE` there is no semicolon at the end of the line
;(async () => {
    try{
        await mongoose.connect('${process.env.MONGO_URL}/${process.env.DB_NAME}')
        app.on("error",() => { // app. are listners
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