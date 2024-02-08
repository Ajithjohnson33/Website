import React, { useState } from 'react';

function UploadDocuments() {

    const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle the file upload process here
    console.log(selectedFiles);
  };

  // Inline CSS styles
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  };

  const formStyle = {
    margin: '20px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
  };

  const buttonStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  };
  return (
    <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Upload Your Documents</h2>
        <input
          type="file"
          onChange={handleFileChange}
          style={inputStyle}
          multiple
        />
        <button type="submit" style={buttonStyle}>
          Upload
        </button>
      </form>
      {selectedFiles.length > 0 && (
        <ul>
          {Array.from(selectedFiles).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UploadDocuments