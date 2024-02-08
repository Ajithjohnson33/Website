
// import React, { useState } from 'react';

// import backgroundImage from './loginImage.JPG';


// const containerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   background: 'url(./loginImage.JPG) ',
//   backgroundSize: '100%'

// };

// const formStyle = {
//   background: 'rgba(255, 255, 255, 0.8)',
//   padding: '40px',
//   borderRadius: '10px',
//   width: '300px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
// };

// const titleStyle = {
//   marginBottom: '20px',
//   textAlign: 'center'
// };

// const inputGroupStyle = {
//   marginBottom: '20px'
// };

// const inputStyle = {
//   width: '100%',
//   padding: '10px',
//   border: '1px solid #ccc',
//   borderRadius: '5px'
// };

// const rememberStyle = {
//   marginBottom: '20px',
//   display: 'flex',
//   alignItems: 'center'
// };

// const buttonStyle = {
//   width: '100%',
//   padding: '10px',
//   border: 'none',
//   backgroundColor: '#007bff',
//   color: 'white',
//   borderRadius: '5px',
//   cursor: 'pointer'
// };

// const footerStyle = {
//   textAlign: 'center',
//   marginTop: '20px'
// };

// const linkStyle = {
//   textDecoration: 'none',
//   color: '#007bff'
// };

// const backgroundStyle = {
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center ',
 
//   padding: '20px',
//   borderRadius: '8px',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
// };


// function Login() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
 
//   const handleSubmit = async (event) => {

//     event.preventDefault();

//     // Implement your login logic here

//     fetch("https://edprideadmin.azurewebsites.net/api/Authentication/login",{

//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",

//         },
//         body: JSON.stringify({ email, password }),
//       })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
      
//       return response.json();
//     }) 
//     .then((data) => {
//       console.log(data)
//     })
//     .catch((error) => {
//       console.error('There has been a problem with your fetch operation:', error);
//     }); 
//   };


//   return (

//     <div style={backgroundStyle}>

//     <div style={containerStyle}>
//       <form style={formStyle}>
//         <h2 style={titleStyle}>Login</h2>
//         <div style={inputGroupStyle}>
//           <input type="text" placeholder="Username" required style={inputStyle} />
//         </div>
//         <div style={inputGroupStyle}>
//           <input type="password" placeholder="Password" required style={inputStyle} />
//         </div>
//         <div style={rememberStyle}>
//           <input type="checkbox" id="remember-me" />
//           <label htmlFor="remember-me">Remember Me</label>
//         </div>
//         <button type="submit" style={buttonStyle}>LOGIN</button>
//         <div style={footerStyle}>
//           {/* <a href="#forgot" style={linkStyle}>Forgot Password</a> */}
//           <span>Don't have an account? <a href="/register" style={linkStyle}>Register Now</a></span>
//         </div>
//       </form>
//     </div>

//     </div>



//   );

// }


// export default Login;
