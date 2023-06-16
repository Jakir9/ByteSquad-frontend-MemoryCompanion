import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./timecapsule.css"

function TimeCapsule() {
  const preset_key = "timecapsulegallery";
  const cloud_name = "dllyjgzpb";
  const [images, setImages] = useState([]);

  function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then(res => {
        setImages(prevImages => [...prevImages, res.data.secure_url]); // Append new image URL
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleDelete(index) {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Time Capsule</h1>
      <label htmlFor="upload-image" className="custom-file-upload">
        Upload Image
        <input type="file" id="upload-image" onChange={handleFile} />
      </label>
      <div className="grid-container"> {/* Wrap the image grid in a container */}
        {images.map((image, index) => (
          <div className="grid-item" key={index}> {/* Apply the grid item class */}
            <img src={image} alt={`Image ${index}`} />
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeCapsule;