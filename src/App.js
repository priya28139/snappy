import React from "react";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import UploadForm from "./components/UploadForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default App;
