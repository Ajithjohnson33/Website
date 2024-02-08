
import React from "react";
import imageSrc from './third.JPG';


function ThirdSection() {

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ color: "white" }}></div>
      <div style={{ flex: 1, margin: "0px", width: "50%" }}>

       
      <img src={imageSrc} alt="Image description"
       style={{ width: "95%", height: "70%" }}
       />
      </div>



      <div style={{ width: "50%", marginLeft: "60px", height:"auto" }}>
        <h1 style={{}}>How it works</h1>
        <p style={{}}>
          Creating your school's website is as simple as fillinga form. Let our
          AI take over the heavy lifting of design and content geneartion.
          Customize whenever you want, with no technical hassle.Choose forma
          wide range of stunning Templates desgined speifically for edcuational
          insttutions. Experince the ease changing your website's look with our
          ineractive previews.
        </p>

        <button style={{ backgroundColor: "black", color: "white" }}>
          SEE THE PROCESS
        </button>

      </div>
    </div>


  );
}

export default ThirdSection;
