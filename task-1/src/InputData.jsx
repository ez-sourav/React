
import { Form } from "react-router";

const InputData = () => {
 
  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <Form
    
        method="POST"
        action="/dashboard"
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Employee Data Form
        </h1>

       
        <div>
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>

      
        <div>
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="salary"
          >
            Salary
          </label>
          <input
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter Salary"
            min="1"
            step="any"
            required
          />
        </div>

        
        <div>
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="phNumber"
          >
            Phone No
          </label>
          <input
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            id="phNumber"
            name="phNumber"
            placeholder="Enter 10-digit Phone Number"
            pattern="[0-9]{10}"
            required
          />
        </div>
    
        <button
          className="w-full py-2 bg-blue-600 text-white font-semibold hover:cursor-pointer 
                     transform duration-300 rounded-md hover:bg-blue-700 active:scale-95 transition"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default InputData;
