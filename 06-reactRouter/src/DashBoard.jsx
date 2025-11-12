import { useActionData } from "react-router"


export const DashBoard = () => {
    const actionData = useActionData(); 
  return (
   <div className="h-screen bg-gray-900 flex justify-center items-center">

      <div className="w-full  max-w-sm bg-white p-6 mt-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center underline text-gray-800">
          Form Details
        </h1>

        <div className="mt-4 space-y-2 text-gray-700 text-lg">
          <p>
            <strong>Name:</strong> {actionData.name}
          </p>
          <p>
            <strong>Email:</strong> {actionData.email}
          </p>
          <p>
            <strong>Password:</strong> {actionData.password}
          </p>
        </div>
      </div>
      </div>
  )
}
