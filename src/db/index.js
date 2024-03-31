import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import configEnv from "../configEnv/index.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${configEnv.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongo DB connected!! DB HOST :: ${connectionInstance.host}`
    );
  } catch (error) {
    console.error(
      `Facing an issue while connecting to MONGODB ::\nERROR:: ${error}`
    );
    process.exit(1);
    // throw error;
  }
};

export default connectDB;