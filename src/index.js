import configEnv from "./configEnv/index.js";
import connectDB from "./db/index.js";

console.log(configEnv);

connectDB()
