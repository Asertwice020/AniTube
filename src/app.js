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
app.use(express.json({
  limit: "16kb",
}));

app.use(express.urlencoded({
  extended: true,
  limit: "16kb",
}));

app.use(express.static("public"));

app.use(cookieParser());

export {app}