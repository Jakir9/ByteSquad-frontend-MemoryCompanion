// import React, { useState } from "react";
// import axios from "axios";

function FileUpload({
  handleFileChange,
  handleFileUpload,
  selectedFile,
  setSelectedFile,
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
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
