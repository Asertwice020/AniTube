import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'
import configEnv from "./configEnv/index.js";

const app = express();

app.use(cors({
  origin: configEnv.CORS_ORIGIN,
  credentials: true,
}));

// TODO: YOU CAN ALSO MAKE A ENV VARIABLE TO STORE YOUR LIMIT AND USE IT HERE
// we limit json size for req, it means user can't send more than json which is limit to server.
app.use(express.json({
  limit: "16kb",
}));

app.use(express.urlencoded({
  extended: true,
  limit: "16kb",
}));

// all the files which are storing on the cloudinary will stored on the server for temporary base.
app.use(express.static("public"));

app.use(cookieParser());

// ROUTES IMPORTS
import userRouter from "./routes/user.route.js";

// ROUTES DECLARATIONS
app.use("/api/v1/users", userRouter)

export {app}