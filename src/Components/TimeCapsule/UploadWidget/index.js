import React from "react";
import { useEffect, useRef } from "react";

function UploadWidget({ refreshClick }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dcdmhdqbi",
        uploadPreset: "TimeCapsuleGallery1",
        showAdvancedOptions: true,
      },
      function (error, result) {
        console.log(result);
        if(result.event === 'success'){
          setTimeout(refreshClick, 10000);
        }
      },
      []
    );
    
  });
    return (
      <button className= "upload-button" onClick={(() => widgetRef.current.open())}>
        Upload
      </button>
    );
}

export default UploadWidget;
