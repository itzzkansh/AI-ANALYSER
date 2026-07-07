import multer from "multer";

const storage = multer.memoryStorage();

const upload =multer({
  storage,
  limits: {
    filesSize: 5* 1024 * 1024,

  },
  fileFilter: (req,file,cb ) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if(allowedTypes.includes(file.mimetype)) {
      cb(null,true);
    }else {
      cb(new Error("Only PDF AND DOCX FILES ARE ALLOWED."));
    }
  },
});
export default upload;
