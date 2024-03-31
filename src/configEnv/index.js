import dotenv from "dotenv";
dotenv.config({
  path: "./env"
});

const configEnv = {
  PORT: Number(process.env.PORT),

  CORS_ORIGIN: String(process.env.CORS_ORIGIN),

  MONGODB_URI: String(process.env.MONGODB_URI),
};

export default configEnv;
