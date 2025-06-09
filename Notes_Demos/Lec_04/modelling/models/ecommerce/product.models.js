import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    productImage: {
      // we can keep the images in mongo itself as it is a very strong database as buffer files but that is not practiced we rather store the images on the cloud in directory and then call from there eg cloudinary.com so we get image address in form of string and store it in the database
      type: String
    }
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
}, {timestamps: true})

export const Product = mongoose.model('Product', productSchema)