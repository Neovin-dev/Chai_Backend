import mongoose from "mongoose";

// here we will make mini schema for the type of orderItems this ts the order item schema. we can write this in separate file but we will write it here as we have to use it in the order schema and order schema is in the same file and there is no requirement to write it in a separate file
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true
    }
})
// --------------------------------------------------------------
const orderSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        default: 0
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems:{
        type: [orderItemsSchema]// we can add array here but we dont have a schema for what product and how many quantity so we have to add the product schema in the order schema 
        // we can also write the schema here in type: []
    },
    address: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "shipped", "delivered"], // enum means it is a list of values which we can choose from
        default: "pending" 
        // these field are required to be filled as well as they have to be from mentioned list
    }
}, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)

// learn these types and categories or prototype as per requirement.
