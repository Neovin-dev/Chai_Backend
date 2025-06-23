import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGN,
    credentials: true, // this is important to allow cookies to be sent
}));
// this is used to set configuration for the cors middleware. we can also use it in the index.js file of the server folder and then export it from there.

app.use(express.json({limit: "50mb"})); // this is used to set the limit for the request body size. we can also use it in the index.js file of the server folder and then export it from there. previously express could pars json data but now we have to use this middleware to parse json data. now this feature is default in express (json parser)
app.use(express.urlencoded({
    extended: true, // this is used to parse the urlencoded data. we can also use it in the index.js file of the server folder and then export it from there.
    limit: "50mb" // this is used to set the limit for the request body size. we can also use it in the index.js file of the server folder and then export it from there.
}));
app.use(express.static("public")); // this is used to serve static files from the public folder. we can also use it in the index.js file of the server folder and then export it from there.
app.use(cookieParser()); // this is used to parse the cookies from the request. we can also use it in the index.js file of the server folder and then export it from there.

// routes import 

import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)

// https:localhost:8000/users/register

export {app}; // we can export the app like this or we can export it as default.