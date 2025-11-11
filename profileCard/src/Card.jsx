import { X } from 'lucide-react';
const Card = ({name,batch,disc,logo,closeCard}) => {
  
  return (
    <main className="relative h-screen rounded-md bg-gray-700 flex justify-center items-center  ">
      <div className="absolute top-0 right-0 mt-2 mr-5">
        <button onClick={closeCard} className="text-4xl hover:cursor-pointer"><X /></button>
      </div>
      <div className="bg-white w-1/3 p-5 rounded-md shadow-md  ">
        <div className="flex gap-5">
          <img
            className="h-16 w-16 border border-gray-800 rounded-full object-cover"
            src={logo}
            alt=""
          />
          <div className="flex justify-center flex-col">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-lg font-mono text-gray-800">Batch {batch}</p>
          </div>
        </div>
        <div className="mt-5 text-gray-700">
          <p>{disc}</p>
        </div>

      </div>
    </main>
  )
}

export default Card