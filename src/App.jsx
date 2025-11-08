import { useState } from "react";
import "./App.css";

function App() {
  //  const name = "Sourav Biswas";
  const [name, setName] = useState("Hello");
  return (
    <>
      <div>
        <h1>{name}</h1>
        <button onClick={()=>{
          setName('Sourav Biswas')
        }}>Chnage Text</button>
      </div>
    </>
  );
}

export default App;
