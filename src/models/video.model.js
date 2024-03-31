import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, // CLOUDINARY URL
      required: [true, "Please provide a video"],
    },

    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please provide a description"],
      trim: true,
    },

    thumbnail: {
      type: String, // CLOUDINARY URL
      required: [true, "Please provide a thumbnail"],
    },

    views: {
      type: Number,
      default: 0,
    },

    isPublic: {
      type: Boolean,
      default: true,
    },

    duration: {
      type: Number, // YOU WILL GET THIS AFTER UPLOADING THE VIDEO TO CLOUDINARY
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(aggregatePaginate)

const Video = mongoose.model("Video", videoSchema);
export default Video;
