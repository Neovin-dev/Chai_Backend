import { eachMinuteOfInterval } from "date-fns"
import mongoose from "mongoose"
// mongoose will help us in writing schemas

const userSchema = new mongoose.Schema({
    username: { // this is a property and better way to write
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email :{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    } // here we can do more kinds of validations
}) // inside the brackets we can write the schema or data

// model is a method which have 2 parameter which are name and schema. export is different in mongoose.
export const User = mongoose.model("User", userSchema)

// there is a standard practice in mongoDB to name the collection as plural of the model and everything is in lowercase.
users