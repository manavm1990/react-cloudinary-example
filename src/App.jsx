import React from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { APIService } from "./services";

function App() {
  // Array of strings - ids of images on cloudinary
  const [images, setImages] = React.useState([]);
  const inputRef = React.useRef();

  const handleChange = async (event) => {
    // Get the file from the input before clearing it
    const file = event.target.files[0];

    inputRef.current.value = "";
    APIService.create(
      file,

      // TODO: Replace this with the user's id from Context
      uuid()
    ).then(({ secure_url: imgURL }) => {
      setImages([...images, imgURL]);
    });
  };

  return (
    <main className="h-screen w-full flex justify-center items-center">
      {/* 🎵 This is firing immediately upon user's upload. Maybe you want a form with a submit confirmation? */}
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        ref={inputRef}
      />
      {/* {file && <img file={file} alt="uploaded" width="500" height="500" />} */}
    </main>
  );
}

export default App;
