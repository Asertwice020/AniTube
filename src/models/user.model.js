import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import configEnv from "../configEnv/index.js";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide an username"],
      unique: true,
      trim: true,
      index: true,
    },

    fullName: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
    },

    avatar: {
      type: String, // CLOUDINARY URL
      //TODO: ADD A DEFAULT IMAGE URL HERE, (Cloudinary URL) default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },

    coverImage: {
      type: String, // CLOUDINARY URL
      //TODO: ADD A DEFAULT COVER IMAGE URL HERE, (Cloudinary URL) default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },

    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: 8,
      max: 25,
    },

    watchHistory: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      ],
    },

    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordMatched = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      userName: this.userName,
      email: this.email,
    },
    configEnv.ACCESS_TOKEN_SECRET,
    {
      expiresIn: configEnv.ACCESS_TOKEN_EXPIRY
    }
  )
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    configEnv.REFRESH_TOKEN_SECRET,
    {
      expiresIn: configEnv.REFRESH_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);
export default User;