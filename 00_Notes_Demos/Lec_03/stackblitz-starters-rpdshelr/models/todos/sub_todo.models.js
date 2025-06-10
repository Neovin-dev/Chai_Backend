import mongoose from "mongoose";

// schema is a method which expects a object
const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // here we have to write the name of the model
    },
    SubTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // Array of SubTodos
},{timestamps: true})

export const SubTodo = mongoose.model("Todo", todoSchema);