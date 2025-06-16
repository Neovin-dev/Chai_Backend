import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        // order of fields doesnt matter as object not string
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);