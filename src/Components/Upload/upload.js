import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    // Local Host Port needs to be the backend server port
    axios.post("http://localhost:3001/upload", formData)
      .then((response) => {
        // File upload was successful
        console.log(response.data);
      })
      .catch((error) => {
        // File upload failed
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
