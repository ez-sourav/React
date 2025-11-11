import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Hello");
  console.log(name);
  return (
    <>
      <div>
        <h1>{name}</h1>
        <button
          onClick={() => {
            setName("Sourav Biswas");
          }}
        >
          Chnage Text
        </button>
        
      </div>
    </>
  );
}

export default App;
