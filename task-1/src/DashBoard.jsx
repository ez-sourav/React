import { useActionData, Link } from "react-router-dom";

const DashBoard = () => {
  const formData = useActionData();

  if (!formData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-xl mb-4">⚠️ No Data Found</h2>
        <Link
          to="/inputdata"
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-lg ">
        <h1 className="text-2xl text-center font-bold text-gray-800 underline mb-4">
          Employee Details
        </h1>
        
        <div className="space-y-2 text-gray-700 text-lg">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Salary:</strong> {formData.salary}</p>
          <p><strong>Phone No:</strong> {formData.phNumber}</p>
        </div>

        <Link
          to="/inputdata"
          className="inline-block mt-6 text-blue-600 hover:underline text-sm "
        >
          ← Back to Form
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
