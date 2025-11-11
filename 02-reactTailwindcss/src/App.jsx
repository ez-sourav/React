
const App = () => {
  function click() {
    al;
  }
  return (
    <>
      <nav className="bg-gray-500 p-2">
        <div className="relative flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-semibold text-white">SIT</h1>

          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-5 text-white font-medium">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <button className="py-2 px-5 bg-blue-500 rounded-full font-medium hover:cursor-pointer active:scale-95">
              Login
            </button>
            <button className="py-2 px-5 bg-blue-500 rounded-full font-medium hover:cursor-pointer active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default App;
