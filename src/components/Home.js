
import React, { useState, useEffect } from "react";
import imageSrc from './rightside.JPG';

function Home() {
  // State to manage the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to determine if the device is mobile based on window width
  const isMobile = windowWidth < 768; // Mobile devices (including tablets in portrait mode)
  const isTablet = windowWidth >= 768 && windowWidth < 1024; // Tablet devices (in landscape mode)

  const containerStyle = {
    display: isMobile || isTablet ? "block" : "flex",
    backgroundColor: "purple",
    padding: isMobile ? "30px 15px" : isTablet ? "50px 30px" : "110px",
    textAlign: isMobile || isTablet ? "center" : "left",
  };

  const imageStyle = {
    width: isMobile ? "100%" : isTablet ? "80%" : "50%",
    height: "auto",
    marginTop: isMobile || isTablet ? "20px" : "0",
    marginLeft: isTablet ? "10%" : "0", // Center the image in tablet mode
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: isMobile ? "100%" : isTablet ? "100%" : "50%", color: "white" }}>
        <h1>World's first AI-Powered School Website Builder</h1>
        <p>
          Empower your School's online presence with a Click! No tech skills? No
          problem! Create and update your school's website effortlessly.
        </p>
        <button style={{ marginTop: isMobile || isTablet ? "20px" : "0", padding: "10px 20px", fontSize: isMobile ? "14px" : "16px" }}>BUILD YOUR WEBSITE</button>
      </div>
      <img src={imageSrc} alt="Image description" style={imageStyle} />
    </div>
  );
}

export default Home;
