import React from "react";
import "./App.css";
import { APIService } from "./services";

function App() {
  const [images, setImages] = React.useState([]);

  const handleChange = async (event) => {
    const { public_id } = await APIService.create(event.target.files[0]);
  };

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <input type="file" onChange={handleChange} accept="image/*" />
      {/* {file && <img file={file} alt="uploaded" width="500" height="500" />} */}
    </main>
  );
}

export default App;
