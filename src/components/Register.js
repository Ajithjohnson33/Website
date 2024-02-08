
import React, { useState } from 'react';

function Register() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {

    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const phoneNumber = formData.phoneNumber;
    const email = formData.email;
    const password = formData.password;
        event.preventDefault();

  //Implement your register logic here

    fetch("https://edprideuser.azurewebsites.net/api/Authentication/register",{

         method: "POST",
         headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({ firstName,lastName,phoneNumber,email, password }),
      })
    .then((response) => {
       if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
       return response.json();
     }) 
     .then((data) => {
       console.log(data)
     })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
     }); 
  };
  
  return (

    <>
      <style>
        {`
          .registration-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }

          .image-section {
            flex: 1;
          }

          .image-section img {
            width: 100%;
            height: auto;
          }

          .form-section {
            flex: 1;
            padding: 20px;
          }

          .form-group {
            margin-bottom: 15px;
          }

          input {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }

          button[type="submit"] {
            width: 100%;
            background-color: black;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          // button[type="submit"]:hover {
          //   background-color: #45a049;
          // }

          @media (max-width: 768px) {
            .registration-container {
              flex-direction: column;
            }

            .image-section,
            .form-section {
              flex: none;
              width: 100%;
            }
          }
        `}
      </style>

      <div className="registration-container">
        <div className="image-section">
          {/* You can place your image here */}


          <img src="./registerImage.JPG" alt="Registration Visual" />

        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
              />
            </div>


            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )

}

export default Register


