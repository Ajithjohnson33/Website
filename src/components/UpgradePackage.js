

import React, { useState } from 'react';


function UpgradePackage() {
    const [selectedPackage, setSelectedPackage] = useState('');

    const handleSelectPackage = (packageName) => {
      setSelectedPackage(packageName);
      // Additional logic for selecting a package can be added here
    };
  
    const handleUpgrade = () => {
      console.log('Upgrading to:', selectedPackage);
      // Logic to handle the upgrade process
    };
  
    // Inline CSS styles for the UpgradePackage component
    const pageStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif',
    };
  
    const cardContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '20px',
    };
  
    const cardStyle = {
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
      cursor: 'pointer',
    };
  
    const buttonStyle = {
      marginTop: '20px',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
      fontSize: '16px',
      cursor: 'pointer',
    };
  
    // PackageOption component defined within the same file
    const PackageOption = ({ packageName, onClick }) => (
      <div style={cardStyle} onClick={() => onClick(packageName)}>
        <h3>{packageName}</h3>
        <p>Details about the {packageName} package.</p>
      </div>
    );


  return (
     <div style={pageStyle}>
      <h1>Upgrade Your Package</h1>
      <div style={cardContainerStyle}>
        <PackageOption packageName="Basic" onClick={handleSelectPackage} />
        <PackageOption packageName="Pro" onClick={handleSelectPackage} />
        <PackageOption packageName="Premium" onClick={handleSelectPackage} />
      </div>
      {selectedPackage && (
        <button style={buttonStyle} onClick={handleUpgrade}>
          Upgrade to {selectedPackage}
        </button>
      )}
    </div>
  )
}

export default UpgradePackage