import React from "react";

const Button = ({user,setName}) => {
  function btnClick() {
    const randNumber = Math.floor(Math.random() * 4);
    setName(user[randNumber]);
    console.log(randNumber);
  }
  return (
    <button
      onClick={btnClick}
      className="py-4 px-2 text-white rounded-xl font-semibold text-2xl active:scale-95 cursor-pointer mt-7  bg-blue-600"
    >
      Change Name
    </button>
  );
};

export default Button;
