
import Resume from "../models/Resume.js";
import { extractPdfText } from "../services/pdfService.js";

export const uploadResume = async (req, res) => {
  try {

    // Check file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume.",
      });
    }

    // console.log(req.file);  // for checking req.file is working or not 

    // // extracting the text of pdf
    const text = await extractPdfText(req.file.buffer);
    console.log("===========resumeee text==========");
    console.log(text);
    console.log("------------");

    res.status(200).json({
      success: true,
      message: "Resume uploaded successfully and parsed also successfully.",
      text: text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};