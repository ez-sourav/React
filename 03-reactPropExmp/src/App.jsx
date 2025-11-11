import { useState } from "react";
import Button from "./Button";

function App() {
  const user = ["Sourav", "Souvik", "Kabir", "Riktam"];
  const [name, setName] = useState(["User"]);
  

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-900 text-2xl">
        <div className=" flex flex-col  py-5 px-5 rounded-2xl bg-white ">
          <h1 className="text-center  text-5xl font-medium ">Hello {name}</h1>
          <Button user={user}  setName={setName}/>
        </div>
      </div>
    </>
  );
}

export default App;
