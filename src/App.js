import SearchImage from "./API";
import "./App.css";
import SeachBar from "./components/SeachBar";

import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState("");

  const handleSubmit = async (term) => {
    //do handling of the variable defined
    const result = await SearchImage(term);

    setImages(result);
  };
  return (
    <div className="App">
      <SeachBar onSubmit={handleSubmit} />

      <ImageList images={images} />
    </div>
  );
}

export default App;
