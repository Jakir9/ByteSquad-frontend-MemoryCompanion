import { useEffect, useRef } from "react";
import UploadWidget from "./UploadWidget";
import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

function TimeCapsule() {
  // auth0 code
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // User is logged in, redirect to dashboard
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  // end auth0 code

  const containerRef = useRef(null);

  async function fetchCloudinaryGalleryWidget(containerRef) {
    if (window && containerRef) {
      const myWidget = await window.cloudinary.galleryWidget({
        container: ".gallery-grid",
        cloudName: "dcdmhdqbi",
        mediaAssets: [
          {
            tag: "gallery",
            mediaType: "image",
          },
        ],
        displayProps: {
          spacing: 15,
        },
        transformation: {
          crop: "fill",
        },
        // aspectRatio: "1:1",
        bgColor: "transparent",

        carouselLocation: "bottom",
        carouselOffset: 10,
        navigation: "always",
        thumbnailProps: {
          mediaSymbolSize: 42,
          spacing: 20,
          width: 90,
          height: 90,
          navigationFloat: true,
          navigationShape: "square",
          navigationSize: 40,
          navigationColor: "#ffffff",
          selectedStyle: "border",
          selectedBorderPosition: "bottom",
          selectedBorderWidth: 4,
          navigationIconColor: "#000000",
        },
        navigationButtonProps: {
          shape: "rectangle",
          iconColor: "#ffffff",
          color: "#000",
          size: 52,
          navigationPosition: "offset",
          navigationOffset: 12,
        },
        themeProps: {
          primary: "#000000",
          active: "#777777",
        },
        secureDistribution: "res-s.cloudinary.com",
        transition: "fade",
        zoomProps: {
          level: 2,
        },
        carouselStyle: "indicators",
        indicatorProps: {
          shape: "round",
        },
      });
      myWidget.render();
      console.log(myWidget);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchCloudinaryGalleryWidget(containerRef.current);
    }
    fetchData();
  }, []);

  function galleryRefresh() {
    const myWidget = window.cloudinary.galleryWidget({
      container: ".gallery-grid",
      cloudName: "dcdmhdqbi",
      mediaAssets: [
        {
          tag: "gallery",
          mediaType: "image",
        },
      ],
      displayProps: {
        spacing: 15,
      },
      transformation: {
        crop: "fill",
      },
      aspectRatio: "1:1",
      bgColor: "transparent",

      carouselLocation: "bottom",
      carouselOffset: 10,
      navigation: "always",
      thumbnailProps: {
        mediaSymbolSize: 42,
        spacing: 20,
        width: 90,
        height: 90,
        navigationFloat: true,
        navigationShape: "square",
        navigationSize: 40,
        navigationColor: "#ffffff",
        selectedStyle: "border",
        selectedBorderPosition: "bottom",
        selectedBorderWidth: 4,
        navigationIconColor: "#000000",
      },
      navigationButtonProps: {
        shape: "rectangle",
        iconColor: "#ffffff",
        color: "#000",
        size: 52,
        navigationPosition: "offset",
        navigationOffset: 12,
      },
      themeProps: {
        primary: "#000000",
        active: "#777777",
      },
      secureDistribution: "res-s.cloudinary.com",
      transition: "fade",
      zoomProps: {
        level: 1,
      },
      carouselStyle: "indicators",
      indicatorProps: {
        shape: "round",
      },
    });
    myWidget.render();
    console.log("refresh called");
  }

  return (
    isAuthenticated && (
      <div>
        <h1 className="page-title">TIME CAPSULE</h1>
        <div
          className="gallery-grid"
          ref={containerRef}
          style={{ width: "90%", margin: "auto", marginBottom: "1rem" }}
          
        />
        <UploadWidget refreshClick={galleryRefresh} />
        <button className="refresh-button" onClick={galleryRefresh}>
          Refresh
        </button>
      </div>
    )
  );
}

export default TimeCapsule;
