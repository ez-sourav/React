import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./logo";
export default function ProfileCardAnimation() {
  const [show, setShow] = useState(false);

  const name = "Sourav Biswas";
  const batch = "2025";
  const disc =
    "Frontend Developer skilled in React, Tailwind, and modern web tools.";

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800">
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {show ? "Hide Profile" : "Show Profile"}
      </button>

      <AnimatePresence>
        {show && (
          <motion.main
            key="card"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-screen fixed top-0 left-0 w-full flex justify-center items-center bg-black/60"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="bg-white w-1/3 p-5 rounded-md shadow-md"
            >
              <div className="flex gap-5">
                <img
                  className="h-16 w-16 border border-gray-800 rounded-full object-cover"
                  src={logo}
                  alt="profile"
                />
                <div className="flex justify-center flex-col">
                  <h2 className="text-2xl font-semibold">{name}</h2>
                  <p className="text-lg font-mono text-gray-800">
                    Batch {batch}
                  </p>
                </div>
              </div>
              <div className="mt-5 text-gray-700">
                <p>{disc}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShow(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
