import dotenv from "dotenv";
dotenv.config({
  path: "./env"
});

const configEnv = {
  PORT: Number(process.env.PORT),

  MONGODB_URI: String(process.env.MONGODB_URI),
};

export default configEnv;
