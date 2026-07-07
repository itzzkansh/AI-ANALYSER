import express from "express";

import { uploadResume } from "../controllers/resumeController.js";

import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/upload",
  auth,
  upload.single("resume"),
  uploadResume
);

export default router;