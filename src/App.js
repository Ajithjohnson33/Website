
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Packages from './components/Packages';
import Templates from './components/Templates';
import Login from './components/Login';
import AddSchoolInfo from './components/AddSchoolInfo';
import UploadDocuments from './components/UploadDocuments';
import VerifyEmail from './components/VerifyEmail';
import UpgradePackage from './components/UpgradePackage';



function App() {
  return (

    <Routes>

      <Route exact path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/packages" element={<Packages/>} />
      <Route path="/templates" element={<Templates/>} />
      <Route path="/AddSchoolInfo" element={<AddSchoolInfo/>} />
      <Route path="/UploadDocuments" element={<UploadDocuments/>} />
      <Route path="/VerifyEmail" element={<VerifyEmail/>} />
      <Route path="/UpgradePackage" element={<UpgradePackage/>} />
      
    </Routes>
  );
} 


export default App;