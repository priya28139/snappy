import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelected = (event) => {
    const allowed_file_types = ["image/png", "image/jpg", "image/jpeg"];
    const selected_file = event.target.files[0];
    if (selected_file && allowed_file_types.includes(selected_file.type)) {
      setFile(selected_file);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png, jpg, jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleFileSelected} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
