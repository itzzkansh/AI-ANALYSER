import Resume from "../models/Resume.js";
import { extractPdfText } from "../services/pdfService.js";
// import { analyzeResume } from "../services/geminiService.js";

export const uploadResume = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume.",
      });
    }

    // Extract text from uploaded PDF
    const text = await extractPdfText(req.file.buffer);

    console.log("=========== Resume Text ===========");
    console.log(text);
    console.log("----------------------------------");

    // ======================================================
    // GEMINI AI (temporarily disable because of API Quota)
    // ======================================================

    /*
    const analysis = await analyzeResume(text);

    console.log("========== GEMINI RESPONSE ==========");
    console.log(analysis);
    console.log("====================================");
    */

    // temporary mock analysis
    const analysis = {
      atsScore: 0,
      summary: "AI analysis pending",
      strengths: [],
      weaknesses: [],
      missingSkills: [],
      recommendations: [],
    };

    console.log("========== MOCK ANALYSIS ==========");
    console.log(analysis);
    console.log("===================================");

    // Save Resume in MongoDB
    const resume = await Resume.create({
      user: req.user._id,
      originalFileName: req.file.originalname,
      extractedText: text,
      analysis,
    });

    // Send Response
    return res.status(201).json({
      success: true,
      message: "Resume uploaded successfully.",
      resume,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// resume history

export const getResumeHistory = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      resumes,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// get single resume by id

export const getSingleResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    res.status(200).json({
      success: true,
      resume,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
