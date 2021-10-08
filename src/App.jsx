import React from "react";
import "./App.css";

function App() {
  const handleChange = () => {
    console.log("change");
  };
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <input type="file" onChange={handleChange} accept="image/*" />
    </main>
  );
}

export default App;
