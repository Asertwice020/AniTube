import dotenv from "dotenv";
dotenv.config({
  path: "./env"
});

const validateEnvVar = (varName, expectedType) => {
  const value = process.env[varName];
  if (typeof value !== expectedType) {
    throw new Error(`Invalid environment variable: ${varName}`);
  }
  return value;
};

const configEnv = {
  PORT: Number(validateEnvVar("PORT", "number")),
  // CORS_ORIGIN: String(process.env.CORS_ORIGIN),
  // MONGODB_URI: String(validateEnvVar("MONGODB_URI", "string")),
  // ACCESS_TOKEN_SECRET: String(process.env.ACCESS_TOKEN_SECRET),
  // ACCESS_TOKEN_EXPIRY: String(process.env.ACCESS_TOKEN_EXPIRY),
  // REFRESH_TOKEN_SECRET: String(process.env.REFRESH_TOKEN_SECRET),
  // REFRESH_TOKEN_EXPIRY: String(process.env.REFRESH_TOKEN_EXPIRY),
  // CLOUDINARY_CLOUD_NAME: String(process.env.CLOUDINARY_CLOUD_NAME),
  // CLOUDINARY_API_KEY: Number(validateEnvVar("CLOUDINARY_API_KEY", "number")),
  // CLOUDINARY_API_SECRET: String(process.env.CLOUDINARY_API_SECRET),
};

export default configEnv;
/*
const configEnv = {
  PORT: Number(process.env.PORT),

  CORS_ORIGIN: String(process.env.CORS_ORIGIN),

  MONGODB_URI: String(process.env.MONGODB_URI),

  ACCESS_TOKEN_SECRET: String(process.env.ACCESS_TOKEN_SECRET),

  ACCESS_TOKEN_EXPIRY: String(process.env.ACCESS_TOKEN_EXPIRY),

  REFRESH_TOKEN_SECRET: String(process.env.REFRESH_TOKEN_SECRET),
  
  REFRESH_TOKEN_EXPIRY: String(process.env.REFRESH_TOKEN_EXPIRY),

  CLOUDINARY_CLOUD_NAME: String(process.env.CLOUDINARY_CLOUD_NAME),

  CLOUDINARY_API_KEY: Number(process.env.CLOUDINARY_API_KEY),

  CLOUDINARY_API_SECRET: String(process.env.CLOUDINARY_API_SECRET),
};
*/