import { useState } from "react"
import Card from "./Card"

const App = () => {

  const [name, setName] = useState('')
  const [batch, setBatch] = useState('')
  const [disc, setDisc] = useState('')
  const [logo, setLogo] = useState('')
  const [showCard, setShowCard] = useState(false)
  const userDetails = [{
    name:"Sourav Biswas",
    batch:"2023-2027",
    disc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, odit magnam reiciendis nesciunt fuga, a saepe sed illo aliquam aut repudiandae! Illum, debitis magnam quis atque quaerat hic esse tempore.",
    logo:"https://freepngimg.com/download/icon/avatars/5817-man-person.png",
  }]

  function getData(){
    userDetails.map((e)=>{
      setName(e.name)
      setBatch(e.batch)
      setDisc(e.disc)
      setLogo(e.logo)
      setShowCard(true)
    })
  }

   function closeCard() {
    setShowCard(false);
  }

  return (
    <div className="bg-gray-800 flex flex-col p-5 h-screen">
      <button 
      className="py-3 px-5 text-2xl font-semibold bg-blue-500 text-white rounded mb-3 transform transition duration-300 active:scale-95 hover:cursor-pointer "
      onClick={getData}
      >Click to Get Data</button>
      {showCard ? (<Card name={name} batch={batch} logo={logo} disc={disc} closeCard={closeCard}/>):null }
    </div>
    
    
  )
}

export default App