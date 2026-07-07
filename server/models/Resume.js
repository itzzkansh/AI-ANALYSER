import mongoose from "mongoose";
 const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,

    },
    OriginalFileName: {
      type: String,
      required: true,

    },
    cloudinaryUrl: {
      type: String,
      default: "",

    },
    atsScore: {
      type: Number,
      default: "0",
    },
    analysis: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
 );

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;