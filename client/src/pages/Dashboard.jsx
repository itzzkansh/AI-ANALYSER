function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Upload Resume
        </button>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Previous Resumes</h2>

          <p>No resumes uploaded yet.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
