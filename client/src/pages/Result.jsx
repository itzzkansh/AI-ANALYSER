import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Result() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(`/resume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResume(response.data.resume);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch resume.");
    }
  };

  if (!resume) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">ATS Resume Analysis</h1>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Back
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">ATS Score</h2>
            <p className="text-3xl text-blue-600 font-bold mt-2">
              {resume.analysis.atsScore}%
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="mt-2">{resume.analysis.summary}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Strengths</h2>

            <ul className="list-disc pl-6 mt-2">
              {resume.analysis.strengths.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Weaknesses</h2>

            <ul className="list-disc pl-6 mt-2">
              {resume.analysis.weaknesses.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Missing Skills</h2>

            <ul className="list-disc pl-6 mt-2">
              {resume.analysis.missingSkills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Recommendations</h2>

            <ul className="list-disc pl-6 mt-2">
              {resume.analysis.recommendations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
