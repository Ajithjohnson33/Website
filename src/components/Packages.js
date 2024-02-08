
import React, { useState } from 'react';



function Packages() {
const [planDuration, setPlanDuration] = useState('monthly');

  // Define inline styles
  const containerStyle = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'purple',
    padding: '20px',
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    margin: '0', // Remove default margin
    overflow: 'auto' // Add scroll for content overflow
  };

  const headingStyle = {
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    border: '1px solid white',
    background: 'transparent',
    color: 'white',
    cursor: 'pointer',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: 'white',
    color: 'purple',
  };

  const plansStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  const planStyle = {
    width: '30%',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: 'black',
  };

  const planHeadingStyle = {
    color: 'purple',
  };

  const priceStyle = {
    fontSize: '24px',
    color: 'purple',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };



// import Navbar from './Navbar';

// const pageStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   fontFamily: 'Arial, sans-serif',
// };

// const headerStyle = {
//   color: 'black', // Replace with the exact color code from your design
//   margin: '20px 0',
//   textAlign: 'center',
// };

// const planContainerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   margin: '20px 0',
// };

// const planStyle = {
//   backgroundColor: 'white', // Replace with the exact color code from your design
//   borderRadius: '8px',
//   padding: '20px',
//   margin: '0 10px',
//   width: '300px', // Set the width as per your design
//   boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // This adds a subtle shadow to the plan cards
// };

// const planHeaderStyle = {
//   fontSize: '24px',
//   marginBottom: '15px',
//   color:'blue'
// };

// const planPriceStyle = {
//   fontSize: '20px',
//   fontWeight: 'bold',
//   marginBottom: '15px',
// };

// const featureListStyle = {
//   listStyleType: 'none',
//   padding: '0',
//   margin: '0',
// };

// const featureItemStyle = {
//   margin: '10px 0',
//   color: 'black', // Replace with the exact color code from your design
// };

// // Replace the buttonStyle with actual colors and styling from your design
// const buttonStyle = {
//   backgroundColor: 'blue', // Replace with the exact color code from your design
//   color: 'white',
//   border: 'none',
//   padding: '10px 20px',
//   borderRadius: '20px',
//   cursor: 'pointer',
//   fontSize: '16px',
//   marginTop: '20px',
// };

// const buttonStyle1 = {
//   backgroundColor: 'black', // Button background color
//   color: 'white', // Text color
//   border: 'none', // No border
//   padding: '10px 20px', // Padding inside the button
//   fontSize: '16px', // Font size
//   fontWeight: 'bold', // Font weight
//   cursor: 'pointer', // Cursor to pointer to indicate it's clickable
//   outline: 'none', // Remove outline that might appear on focus
//   borderRadius: '0', // Square corners
// };


//   // Define your styles as a JavaScript object
//   const navbarStyle = {
//     backgroundColor: 'grey',
//     innerHeight: '5px',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'flex-end',
//     fontSize: '20px'
    
//   };

//   const navLinksStyle = {
//     listStyleType: 'none',
//     margin: 0,
//     padding: 0,
//     display: 'flex',

//   };

//   const linkStyle = {
//     color: 'black',
//     textAlign: 'center',
//     padding: '14px 16px',
//     textDecoration: 'none',

//   };



  return (

    <div>
       {/* <nav style={navbarStyle}>

      <ul style={navLinksStyle}>
        <li><a href="/" style={linkStyle}>Edpride</a></li>
        <li><a href="/templates" style={linkStyle}>Templates</a></li>
        <li><a href="/packages" style={linkStyle}>Packages</a></li>
        
      </ul>
    </nav> */}

<div style={containerStyle}>
      <h1 style={headingStyle}>Pricing Plans</h1>
      <p style={paragraphStyle}>
        We’ve got plans that are perfect for you. Get started with 100+
        customizable templates, a smart drag and drop editor, tools to boost
        your online presence and more.
      </p>
      <div>
        <button
          style={planDuration === 'monthly' ? activeButtonStyle : buttonStyle}
          onClick={() => setPlanDuration('monthly')}
        >
          Monthly
        </button>
        <button
          style={planDuration === 'yearly' ? activeButtonStyle : buttonStyle}
          onClick={() => setPlanDuration('yearly')}
        >
          Yearly
        </button>
      </div>
      <div style={plansStyle}>
        <div style={planStyle}>
          <h2 style={planHeadingStyle}>Base Plan</h2>
          <p style={priceStyle}>Free</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Welcome Message</li>
            <li style={listItemStyle}>Cover Photo</li>
            <li style={listItemStyle}>Banner slider</li>
            <li style={listItemStyle}>Announcements Page</li>
          </ul>
        </div>
        <div style={planStyle}>
          <h2 style={planHeadingStyle}>Pro Plan</h2>
          <p style={priceStyle}>$40/Month</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Welcome Message</li>
            <li style={listItemStyle}>Cover Photo</li>
            <li style={listItemStyle}>Banner slider: 3 Images</li>
            <li style={listItemStyle}>Announcements Page</li>
          </ul>
        </div>
        <div style={planStyle}>
          <h2 style={planHeadingStyle}>Advanced Plan</h2>
          <p style={priceStyle}>$75/Month</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Welcome Message</li>
            <li style={listItemStyle}>Cover Photo</li>
            <li style={listItemStyle}>Banner slider: 5 Images</li>
            <li style={listItemStyle}>Announcements Page</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Packages