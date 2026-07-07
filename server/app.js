import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; 
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

// connecting the DB
// connectDB();

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes); 

// test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI ATS Resume Analyzer API",
  });
});
app.use("/api/resume", resumeRoutes);

export default app;
