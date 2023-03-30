import React, { useState, useEffect,createContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Props from "../ component/Props";
import App from "../App";

// export const UserContext = createContext()
// setLoginuser({...loginuser,registra:{data}})
function Login(props) {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


//    const [user,setUser ] = useState()


//  console.log("---user----",user);

  const handleSubmit = (event) => { 
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // setUser(data)

    props.data(data)
    

    let userdata = JSON.parse(localStorage.getItem("register"));

    let user = userdata.find((user) => user.email === data.email);

    let fdata = user.password;
    let decoded = window.atob(fdata);
    
    if (decoded == data.password) {
      Navigate("/Apit");
      alert("user login Successfully ");

      localStorage.setItem("Login", JSON.stringify(user));

      if (data.email === "kajal123@gmail.com" && data.password === "1234567") {
        localStorage.setItem("isAdmin", "yes");
        alert("user  admin");
      }
    } else {
      alert("email end  password  is not matching with our Registration");
    }
  };
  const Register = () => {
    Navigate("/Registration");
  };
  const handleSubmitForgotPassword = () => {
    Navigate("/ForgotPassword");
  };
  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />

          {email == undefined ? (
            ""
          ) : email == 0 || email.length > 20 ? (
            ""
          ) : (
            <span>Email is required</span>
          )}
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          {password == undefined ? (
            ""
          ) : password == 0 || password.length >=6 ? (
            ""
          ) : (
            <span> passsword must be at least 6 characters</span>
          )}
          {/* {password === "" || password === undefined || password === 0 ? (
            <span>password is required</span>
          ) : password === null || password?.length < 6 ? (
            <span> passsword must be at least 6 characters</span>
          ) : (
            ""
          )}  */}
        </div>
        <button type="submit">Login</button>
        <button onClick={Register}>Register</button>
        <button type="button" onClick={handleSubmitForgotPassword}>
          ForgotPassword
        </button>
      </form>
    </div>
  );
}

export default Login;
