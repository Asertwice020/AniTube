import { v2 as cloudinary } from "cloudinary";
import configEnv from "../configEnv/index.js";
import fs from "fs";

cloudinary.config({
  cloud_name: configEnv.CLOUDINARY_CLOUD_NAME,
  api_key: configEnv.CLOUDINARY_API_KEY,
  api_secret: configEnv.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // TODO: UPLOAD THE LOCAL FILE ON CLOUDINARY
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // FIXME: CREATE A FLASH MESSAGE TO INDICATE THAT THE FILE HAS BEEN UPLOADED ON CLOUDINARY SUCCESSFULLY
    console.log("File Has Been Successfully Uploaded!", response.url);
    return response;
  } catch (error) {
    // REMOVE THE LOCALLY SAVED TEMP FILE, IF FILE UPLOADING GOT FAILED
    fs.unlinkSync(localFilePath);
    return null;
  }
};
