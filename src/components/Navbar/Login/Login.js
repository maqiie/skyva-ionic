
// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "react-toastify/dist/ReactToastify.css";

// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const [formData, setFormData] = useState({
//     isSignUp: false,
//     usernameOrEmail: "",
//     name: "",
//     password: "",
//     confirmPassword: "",
//     loading: false,
//   });

//   const { isSignUp, usernameOrEmail, name, password, confirmPassword, loading } = formData;

//   const handleSwitchClick = () => {
//     setFormData({ ...formData, isSignUp: !isSignUp });
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLoginSuccess = () => {
//     toast.success("Login successful!");
//     setTimeout(() => {
//       navigate('/');
//       refreshPage(); // Refresh the page after successful login
//     }, 1000); // Adjust the delay time as needed
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       registerRequest();
//     } else {
//       loginRequest();
//     }
//   };
 
    

//   const refreshPage = () => {
//     window.location.reload(false);
//   };

//   const loginRequest = async () => {
//     try {
//       setFormData({ ...formData, loading: true });
  
//       const response = await axios.post("https://skyva-api-1.onrender.com/auth/sign_in", {
//         email: usernameOrEmail,
//         password,
//       });
  
//       console.log("Login response:", response);
  
//       if (response.status === 200) {
//         const authTokenHeader = response.headers["authorization"];
//         if (authTokenHeader) {
//           const authToken = authTokenHeader.split("Bearer ")[1];
//           localStorage.setItem("authToken", authToken);
//           console.log("Stored authToken:", authToken);
//           handleLoginSuccess();
//         } else {
//           throw new Error("Authorization token not found in response");
//         }
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error("Error with login request:", error);
//       if (error.response) {
//         console.log("Error response:", error.response);
//         if (error.response.status === 401) {
//           toast.error("Invalid email or password");
//         } else {
//           toast.error("An unexpected error occurred. Please try again later.");
//         }
//       } else if (error.request) {
//         console.error("No response from server. Please check your internet connection.");
//         toast.error("No response from server. Please check your internet connection.");
//       } else {
//         console.error("An unexpected error occurred. Please try again later.");
//         toast.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setFormData({ ...formData, loading: false });
//     }
//   };

//   // const registerRequest = async () => {
//   //   try {
//   //     setFormData({ ...formData, loading: true });

//   //     const response = await axios.post("https://skyva-api-1.onrender.com/auth", {
//   //       user: {
//   //         name,
//   //         email: usernameOrEmail,
//   //         password,
//   //         password_confirmation: confirmPassword,
//   //       },
//   //     });

//   //     if (response.status === 200) {
//   //       toast.success("User created successfully!");
//   //       handleLoginSuccess();
//   //     } else {
//   //       throw new Error("Invalid response from server");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error with registration request:", error);
//   //     // Handle error and display toast messages
//   //   } finally {
//   //     setFormData({ ...formData, loading: false });
//   //   }
//   // };
//   const registerRequest = async () => {
//     try {
//       setFormData({ ...formData, loading: true });
  
//       const response = await axios.post("https://skyva-api-1.onrender.com/auth", {
//         user: {
//           name,
//           email: usernameOrEmail,
//           password,
//           password_confirmation: confirmPassword,
//         },
//       });
  
//       console.log("Registration response:", response); // Log the response
  
//       if (response.status === 200) {
//         toast.success("User created successfully! Please login"); // Display the toast message
//         handleLoginSuccess();
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       console.error("Error with registration request:", error);
//       // Handle error and display toast messages
//     } finally {
//       setFormData({ ...formData, loading: false });
//     }
//   };
  
  

//   return (
//     <div className="container1">
//       <div className="card2">
//         <a className="switch" onClick={handleSwitchClick}>
//           Switch to{" "}
//           <span className={isSignUp ? "login-text" : "signup-text"}>
//             {isSignUp ? "Login" : "Sign Up"}
//           </span>
//         </a>

//         <form onSubmit={handleFormSubmit}>
//           <div className="inputBox1">
//             <input
//               type="text"
//               required
//               name="usernameOrEmail"
//               value={usernameOrEmail}
//               onChange={handleInputChange}
//             />
//             <span className="user">{isSignUp ? "Email" : "Username"}</span>
//           </div>

//           {isSignUp && (
//             <div className="inputBox">
//               <input
//                 type="text"
//                 required
//                 name="name"
//                 value={name}
//                 onChange={handleInputChange}
//               />
//               <span>Name</span>
//             </div>
//           )}

//           <div className="inputBox">
//             <input
//               type="password"
//               required
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//             />
//             <span>Password</span>
//           </div>

//           {isSignUp && (
//             <div className="inputBox">
//               <input
//                 type="password"
//                 required
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleInputChange}
//               />
//               <span>Confirm Password</span>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="enter"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    isSignUp: false,
    usernameOrEmail: "",
    name: "",
    password: "",
    confirmPassword: "",
    loading: false,
  });

  const { isSignUp, usernameOrEmail, name, password, confirmPassword, loading } = formData;

  const handleSwitchClick = () => {
    setFormData({ ...formData, isSignUp: !isSignUp });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = () => {
    toast.success("Login successful!");
    setTimeout(() => {
      navigate("/");
      refreshPage();
    }, 1000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      registerRequest();
    } else {
      loginRequest();
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const loginRequest = async () => {
    try {
      setFormData({ ...formData, loading: true });

      const response = await axios.post("http://localhost:3001/auth/sign_in", {
        email: usernameOrEmail,
        password,
      });

      if (response.status === 200) {
        const authTokenHeader = response.headers["authorization"];
        if (authTokenHeader) {
          const authToken = authTokenHeader.split("Bearer ")[1];
          localStorage.setItem("authToken", authToken);
          handleLoginSuccess();
        } else {
          throw new Error("Authorization token not found in response");
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error with login request:", error);
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Invalid email or password");
        } else {
          toast.error("An unexpected error occurred. Please try again later.");
        }
      } else if (error.request) {
        console.error("No response from server. Please check your internet connection.");
        toast.error("No response from server. Please check your internet connection.");
      } else {
        console.error("An unexpected error occurred. Please try again later.");
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setFormData({ ...formData, loading: false });
    }
  };

  const registerRequest = async () => {
    try {
      setFormData({ ...formData, loading: true });

      const response = await axios.post("http://localhost:3001/auth", {
        user: {
          name,
          email: usernameOrEmail,
          password,
          password_confirmation: confirmPassword,
        },
      });

      if (response.status === 201 && response.data && response.data.status === "success") {
        toast.success("User created successfully! Please login");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error with registration request:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setFormData({ ...formData, loading: false });
    }
  };

  return (
    <div className="container1">
      <div className="card2">
        <a className="switch" onClick={handleSwitchClick}>
          Switch to <span className={isSignUp ? "login-text" : "signup-text"}>{isSignUp ? "Login" : "Sign Up"}</span>
        </a>

        <form onSubmit={handleFormSubmit}>
          <div className="inputBox1">
            <input
              type="text"
              required
              name="usernameOrEmail"
              value={usernameOrEmail}
              onChange={handleInputChange}
            />
            <span className="user">{isSignUp ? "Email" : "Username"}</span>
          </div>

          {isSignUp && (
            <div className="inputBox">
              <input
                type="text"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <span>Name</span>
            </div>
          )}

          <div className="inputBox">
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <span>Password</span>
          </div>

          {isSignUp && (
            <div className="inputBox">
              <input
                type="password"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
              />
              <span>Confirm Password</span>
            </div>
          )}

          <button type="submit" className="enter" disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
