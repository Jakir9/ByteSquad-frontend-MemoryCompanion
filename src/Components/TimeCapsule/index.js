import { useEffect, useRef } from "react";
import UploadWidget from "./UploadWidget";
import "./styles.css"

function TimeCapsule() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.cloudinary && containerRef.current) {
      const widget = window.cloudinary.galleryWidget({
        container: containerRef.current,
        cloudName: "dcdmhdqbi", // Replace with your actual Cloudinary cloud name
        mediaAssets: [{ tag: "gallery" }], // Replace with your desired tag or remove if not needed
        "displayProps": {
          "mode": "expanded",
          "columns": 3,
          "spacing": 15
      },
      "zoomProps": {
        "type": "popup",
        "steps": 3
    },
      "aspectRatio": "1:1",
      "transformation": {
          "crop": "fill"
      },
      imageBreakpoint: 1000,
      });
      widget.render(); // Call render() separately after configuring the widget
    }
  }, []);

  function galleryRefresh(){
       const widget = window.cloudinary.galleryWidget({
         container: containerRef.current,
         cloudName: "dcdmhdqbi", // Replace with your actual Cloudinary cloud name
         mediaAssets: [{ tag: "gallery" }], // Replace with your desired tag or remove if not needed
         "displayProps": {
          "mode": "expanded",
          "columns": 3,
          "spacing": 15
      },

      "zoomProps": {
        "type": "popup",
        "steps": 3
    },
      "aspectRatio": "1:1",
      "transformation": {
          "crop": "fill"
      },
      imageBreakpoint: 1000,
       });
    widget.render();
    console.log('refresh called')
  }


  return (
    <div>
      <h1 className= "page-title">Time Capsule</h1>
      <div className="gallery-grid" ref={containerRef} style={{ width: "1200px", margin: "auto" }} />
      <UploadWidget refreshClick={galleryRefresh} />
      <button className="refresh-button" onClick={galleryRefresh}>Refresh</button>
    </div>
  );
}

export default TimeCapsule;
