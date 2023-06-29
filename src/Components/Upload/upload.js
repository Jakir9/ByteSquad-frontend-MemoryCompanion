// import React, { useState } from "react";
// import axios from "axios";
import "./upload.css"

function FileUpload({
  handleFileChange,
  handleFileUpload,
  selectedFile,
  setSelectedFile,
  onClick,
}) {
  const handleUpload = () => {
    handleFileUpload();
    setSelectedFile(null);
  };

  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   console.log(selectedFile);
  // };

  // const handleFileUpload = () => {
  //   const formData = new FormData();
  //   formData.append("file", selectedFile);
  //   // Local Host Port needs to be the backend server port
  //   axios
  //     .post("http://localhost:3002/upload", formData)
  //     .then((response) => {
  //       // File upload was successful
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // File upload failed
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <input
        className="fnf-upload-input"
        type="file"
        onChange={handleFileChange}
      />
      <button
        className="fnf-upload-button"
        onClick={() => {
          handleUpload();
           onClick();
        }}
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
