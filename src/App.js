import React, { useState } from "react";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
