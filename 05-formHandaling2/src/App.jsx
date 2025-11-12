import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showDeatils, setShowDeatils] = useState(false);

  function formHandel(data) {
    setForm({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });

    setShowDeatils(true);
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <form
        method="POST"
        action={formHandel}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          User Form
        </h1>

        <div>
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
          />
        </div>

        <div>
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button
          className="w-full py-2 bg-blue-600 text-white font-semibold hover:cursor-pointer transform  duration-300 rounded-md hover:bg-blue-700 active:scale-95 transition"
          type="submit"
        >
          Submit
        </button>
      </form>

      {showDeatils ? (
        <div className="w-full max-w-sm bg-white p-6 mt-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center underline text-gray-800">
            Form Details
          </h1>

          <div className="mt-4 space-y-2 text-gray-700 text-lg">
            <p>
              <strong>Name:</strong> {form.name}
            </p>
            <p>
              <strong>Email:</strong> {form.email}
            </p>
            <p>
              <strong>Password:</strong> {form.password}
            </p>
          </div>
        </div>
      ) : (
        <h2 className="text-lg text-gray-300 mt-6">
          Submit the form to see details
        </h2>
      )}
    </div>
  );
};

export default App;
