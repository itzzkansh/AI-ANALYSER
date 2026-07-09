import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("resume", file);

      const response = await api.post("/resume/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong while uploading.",
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Upload Resume</h1>

        <form onSubmit={handleUpload}>
          <label className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />

            {file ? (
              <p className="text-green-600 font-medium">{file.name}</p>
            ) : (
              <>
                <p className="text-lg font-medium">
                  📄Click here to choose a PDF
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Only PDF files are allowed
                </p>
              </>
            )}
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Upload Resume
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
