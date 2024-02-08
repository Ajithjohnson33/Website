
import React, { useState } from 'react';

function VerifyEmail() {
    const [code, setCode] = useState('');

    const handleCodeChange = (event) => {
      setCode(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you would typically verify the code
      console.log('Verifying code:', code);
    };
  
    // Inline CSS styles
    const pageStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e8f4f8',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    };
  
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxwidth: '320px',
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    };
  
    const inputStyle = {
      margin: '0 0 20px 0',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    };
  
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#5c6bc0',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };
  
  return (
    <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ color: '#333' }}>Verify Your Email</h2>
        <p>Please enter the verification code sent to your email.</p>
        <input
          type="text"
          value={code}
          onChange={handleCodeChange}
          style={inputStyle}
          placeholder="Verification Code"
        />
        <button type="submit" style={buttonStyle}>Verify Email</button>
      </form>
    </div>
  )
}

export default VerifyEmail  