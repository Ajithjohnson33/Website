import React, { useState } from 'react';



function AddSchoolInfo() {

    const [schoolInfo, setSchoolInfo] = useState({
        schoolName: '',
        schoolAddress: '',
        registrationNumber: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSchoolInfo(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(schoolInfo);
        // Handle the form submission, like sending data to a server
      };
    
      // Inline CSS styles
      const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
        color: '#333',
      };
    
      const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      };
    
      const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
      };
    
      const buttonStyle = {
        padding: '10px',
        border: 'none',
        backgroundColor: '#5c6bc0',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
      };
    
  return (
    <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Add School Information</h2>
        <input
          type="text"
          name="schoolName"
          value={schoolInfo.schoolName}
          onChange={handleChange}
          placeholder="School Name"
          style={inputStyle}
        />
        <input
          type="text"
          name="schoolAddress"
          value={schoolInfo.schoolAddress}
          onChange={handleChange}
          placeholder="School Address"
          style={inputStyle}
        />
        <input
          type="text"
          name="registrationNumber"
          value={schoolInfo.registrationNumber}
          onChange={handleChange}
          placeholder="Registration Number"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Submit Information</button>
      </form>
    </div>
  )
}

export default AddSchoolInfo