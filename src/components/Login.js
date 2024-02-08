
import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
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

  // Api Integration

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    const apiUrl = "https://edprideuser.azurewebsites.net/api/Authentication/login";
  
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => {
      if (!response.ok) {
        // This will catch HTTP status code errors
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.json();
      }
    }) 
    .then((data) => {
      console.log('Success:', data);
      // Handle login success (e.g., store the token, redirect, etc.)
    })
    .catch((error) => {
      // This will catch network errors and errors thrown from the .then block
      console.error('Error:', error.message);
      // Handle errors (e.g., show error message to the user)
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
            margin: 20px;
          }

          .form-group {
            margin-bottom: 15px;
          }

          input {
            width: 50%;
            padding: 10px;
            margin: 5px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }

          button[type="submit"] {
            width: 50%;
            background-color: black;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .login-options {
            display: flex;
            justify-content: space-between;
            width: 50%;
            margin-top: 10px;
          }

          .login-options a {
            text-decoration: none;
            color: blue;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .registration-container {
              flex-direction: column;
            }

            .image-section,
            .form-section {
              flex: none;
              width: 100%;
              margin: 0;
            }

            .login-options {
              flex-direction: column;
              align-items: center;
            }

            .login-options a {
              margin: 5px 0; /* Spacing for mobile view */
            }
          }
        `}

      </style>
      <div className="registration-container">
        <div className="image-section">
          <img src="./registerImage.JPG" alt="Registration Visual" />
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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

            <div className="login-options">
              <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=20&ct=1707283551&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26deeplink%3dowa%252f%253fstate%253d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwv%26RpsCsrfState%3d36040b0e-5bc4-8d9f-f3df-b735a9d20ebf&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c">Forgot Password?</a>
              <a href="/register">Register New User</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
