import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const connectDB = async() => {
    try {// we can store something in a variable if it returns something. 
        const connetionInstnce = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log('\n MongoDB connected ${connetionInstnce.connection.host}');
    } catch (error){
        console.log("MongoDB connection error", error)
        process.exit(1) //read about process.exit() in nodejs
    }
}

export default connectDB

// either we can use try cath or we can use .then() and .catch() to handle the errors.