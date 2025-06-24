import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
// we get a filesystem in nodejs to manage filesystem
import fs from "fs"



// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
    // Click 'View API Keys' above to copy your API secret
})


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloud ", 
            response.url);
            fs.unlinkSync(localFilePath)
            return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload operation
        return null;
    }
}

export {uploadOnCloudinary}