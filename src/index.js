// require('dotenv').config({path: "./env"}) // to use the .env file and it variables as we want the variables as they are required almost everywhere so we want to be avaialbe as soon as the file is started as this is the entry point. this method can be used to do that but is not used as it decreases the consistency of the file. 
// we can use this syntax also `require('dotenv').config();` or `require('dotenv').config({path: "./config.env"})`

import dotenv from "dotenv"; // this is the best practice of it

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ // still not updated in the document but we can use this as a experimental feature by mentioning it in the package.json 
    // "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
    path: "./config.env"
})
 

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Listening on port ${process.env.PORT || 8000}`);
    })
}) // this will connect to the database and then start the server. we can also use async await here but it is not necessary as we are using .then and .catch to handle the promise.
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
     
    // this will exit the process with a failure code
}) // this is the function that will connect to the database and it is imported from the db folder. this will return a promise so we can use async await or then catch to handle the promise. so we can use .then or .catch to handle the promise.
// we can also use the connectDB function in the index.js file of the db folder and then export it from there.





// either we can use try cath or we can use .then() and .catch() to handle the errors.


// this practice of having try catch or .then() and .catch() in the index.js file is not recommended as it decreases the consistency of the file. what we do is we try a function in util file which can apply this error handling on all the functions that we want to use in the index.js file. so we can use that function in the index.js file and it will handle the error for us. this is a good practice as it keeps the code clean and consistent.










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