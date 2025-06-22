import mongoose, {Schema, trusted} from "mongoose";


const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: true
        },
        thumbnail:{
            type: String, // cloudinary url
            required: true

        },
        title:{
            type: String, 
            required: true

        },
        description:{
            type: String, // cloudinary url
            required: true

        },
        duration:{
            type: Number, 
            required: true

        },
        view: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamp: true
    }
)

export const User = mongoose.model("Video", videoSchema)