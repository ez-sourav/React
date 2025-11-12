import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-white space-y-6">
      <h1 className="text-3xl font-bold">Employee Data Management</h1>
      <p className="text-gray-300 max-w-md text-center">
        A simple React project submitting and viewing employee details dynamically using React Router actions.
      </p>

      <div className="flex gap-4">
        <Link
          to="/inputdata"
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go to Form
        </Link>
        <Link
          to="/dashboard"
          className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
};

export default App;
