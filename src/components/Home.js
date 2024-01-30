import React from "react";
import imageSrc from './rightside.JPG';

function Home() {

  return (
    
    <div style={{ display: "flex", backgroundColor: "purple", padding:"110px"}}>
      <div style={{ width: "50%", color: "white" }}>
        <h1>World's first AI-Powered</h1>
        <h1>School Website Builder</h1>
        <p>
          Empower your School's online presence with a Click! No tech skills? No
          problem! Create and update your school's website effortlessly.
        </p>
        <button>BUILD YOUR WEBSITE</button> 
       

      </div>

      <img src={imageSrc} alt="Image description"
       style={{ width: "70%", height: "auto" }}
       />

    </div>

  );
}

export default Home;


