
const Card = ({name,batch,disc,logo}) => {
  return (
    <main className="h-screen rounded-md bg-gray-700 flex justify-center items-center  ">
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