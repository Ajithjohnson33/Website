import React from 'react';


import imageSrc from './tempProfile.JPG';

import { useNavigate } from 'react-router-dom';




const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  
  const mainContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    // Add more styles here
  };

  const headerStyle = {
   
    color: 'black',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '200px', // Adjust as needed
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: '#6C63FF', 
    margin: '0 10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const profileCompleteStyle = {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: '5px 15px',
    borderRadius: '20px',
  };


  
    const sidebarStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100vh',
      width: '250px',
      backgroundColor: '#f7f7f7',
      padding: '20px',
      boxSizing: 'border-box'
    };
  
    const profileContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px'
    };
  
    const profileImageStyle = {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '10px'
    };
  
    const userNameStyle = {
      margin: '0',
      fontWeight: 'bold'
    };

    const container = {
      width: '100%',
      display: "flex",
      flexDirection: "row",
      alignItems: "start"
    }

    // const sidebar={
      

    // }
  
    const packageStyle = {
      margin: '0',
      color: '#777',
      fontSize: '14px'
    };
  
    const upgradeButtonStyle = {
      border: 'none',
      backgroundColor: '#ffc107',
      padding: '10px 20px',
      margin: '10px 0',
      borderRadius: '20px',
      cursor: 'pointer'
    };

    
  
    const menuItemStyle = {
      padding: '10px 0',
      cursor: 'pointer'
    };
  

function Templates() {

  const navigate = useNavigate();

  return (

  
    <div style={pageStyle}>

    <div style={container}>

  

      <div>

      <main style={mainContentStyle}>

      <div style={sidebarStyle}>
      <div style={profileContainerStyle}>

        {/* <img
          src="path-to-image.jpg" // Replace with the path to your image
          alt="Profile"
          style={profileImageStyle}
        /> */}


     <img src={imageSrc} alt="Image description"
       style={{ width: "95%", height: "70%" }}
       />
        <h2 style={userNameStyle}>Antony</h2>
        <p style={packageStyle}>Free Package</p>
        <button onClick={()=>{navigate('/UpgradePackage');}} style={upgradeButtonStyle}>Upgrade Package</button>
      </div>

      <div
      style={menuItemStyle}
      onClick={() => navigate('/')} // Navigates to the homepage when clicked
    >
      Home
    </div>

      <div style={menuItemStyle}>Profile</div>
      <div style={menuItemStyle}>Templates</div>
      <div style={menuItemStyle}>Package</div>
    </div>
      </main>

      </div>

      <div>
     
      
      <header style={headerStyle}>
      <div>
        <h1 style={titleStyle}>Hi Antony</h1>
        <p style={subtitleStyle}>Complete your profile to start using Edpride.</p>
        <div style={buttonContainerStyle}>
          <button onClick={()=>{navigate('/AddSchoolInfo');}} style={buttonStyle}>+ Add School Info</button>
          <button onClick={()=>{navigate('/UploadDocuments');}} style={buttonStyle}>+ Upload Documents</button>
          <button   onClick={()=>{navigate('/VerifyEmail');}} style={buttonStyle}>+ Verify Email</button>
        </div>
      </div>
      <div style={profileCompleteStyle}>
        Profile Complete
      </div>
      </header>

      </div>
      
      {/* Add other page sections here */}
      
    </div>

    
    </div>

  )
}

export default Templates