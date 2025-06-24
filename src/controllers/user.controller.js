// we will use the helper filer asyncHandler to do that operation

import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.models.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";


const generateAccessAndRefreshTokens = async(userId){

    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken
        const refreshToken = user.generateRefreshTokens

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}

const registerUser = asyncHandler( async (req, res) => {
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

    console.log(req.files)
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


// **************************************************************************

    const loginUser = asyncHandler(async (req, res) => {
        // reqest body -> data
        // username or email
        // find the user
        // password checker 
        // access and refresh token
        // send cookies

        // reqest body -> data
        const {email, username, password} = req.body
        
        // username or email
        if (!username || !email){
            throw new ApiError(400, "username or password is required")
        }

        // find the user
        const user = await User.findOne({ // this is to check condition in mongoDB
            $or: [{username}, {email}]
        })

        if(!user){
            throw new ApiError(404, "User does not exists")
        }

        // we will check password from usermodel and bcrypt

        const isPasswordValid = await user.isPasswordCorrect(password)

        if(!isPasswordValid){
            throw new ApiError(404, "Invalid user credentials")
        }

        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

        // sending to cookies

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        const options = {
            httpOnly: true,
            secure: true
        }


        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                { // this is the data object
                    user: loggedInUser, accessToken,
                    refreshToken
                },
                "User logged In Successfully"
            )
        )

    })

})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User Logged Out"))
    
})

export {
    registerUser,

}

// we will import this in app