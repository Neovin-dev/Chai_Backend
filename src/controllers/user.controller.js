// we will use the helper filer asyncHandler to do that operation
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.models.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (requestAnimationFrame, res) => {
    // write down steps so that we can register user (business logic/ Logic/ Algorithm)

    /*
        1. Get user details from frontend. 
        2. validation to check if the data fetched is correct and is in correct format
        3. check if user already exists (check username and email (you can have any parameter you want))
        4. Check for images, check for avatar
        5. upload them to cloudinary, avatar
        6. Create user object - create entry in db
        7. remove password and refresh token field from response
        8. ckeck for user creating
        9. return response
    */

    const {fullName, email, username, password} = req.body
    console.log("email: ", email)

    // either you can write all the error one by one in if else or
    // if (fullName === ""){
    //     throw new ApiError(400, "fullname is required")
    // }

    if(
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser){
        throw new ApiError(409, "User with email or username already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    req.files?.coverImage[0]?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, " Avatar file is required ")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, " Avatar file is required ")
    }

    // entry in database. only User is talking to database

    // 6. Create user object - create entry in db
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user,_id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully") // this is a better approach
    )





    // return res.status(200).json({
    //     message: "post request ran successfully"
    // })

})

export {
    registerUser,

}

// we will import this in app