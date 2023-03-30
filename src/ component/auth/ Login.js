import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { AES, enc } from "crypto-js";

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate();

  const onSubmitLogindata = (data) => {
    let userdata = JSON.parse(localStorage.getItem("reg"));

    let user = userdata.find((user) => user.email === data.email);

    const CryptoJS = require("crypto-js");
    const key = "12345";
    var myPassword = user.password;
    const decrypted = CryptoJS.AES.decrypt(myPassword, key);
    user.password = decrypted.toString(enc.Utf8);

    if (user.password === data.password) {
      Navigate("/");
      alert("user login Successfully ");
      localStorage.setItem("logindata", JSON.stringify(user));

      // if (
      //   data.email === "kajal123@gmail.com" &&
      //   data.password === "Kajal@123"
      // ) {
      //   localStorage.setItem("isAdmin", "yes");
      //   Navigate("/");
      // }else{
      //   alert("user is not Admin")
      // }
      
    } else {
      alert(" email end  password  is not matching with our Registration");
    }
  };

  const handleSubmitForgotPassword = () => {
    Navigate("/ForgotPassword");
  };

  const Register = () => {
    Navigate("/Ragistration");
  };

  return (
    <div>
      <div className="App">
        <p className="title"> Login Form</p>
        <form onSubmit={handleSubmit(onSubmitLogindata)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i,
              })}
              placeholder="bluebill1049@hotmail.com"
              type="email"
            />
            {errors.email && <p className="error">{"email is required"}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              })}
              placeholder="password"
              type="password"
            />
            {errors.password && (
              <p className=" error">
                {
                  "password a to z capital & small  number & special cherecter  is required"
                }
              </p>
            )}
          </div>
          <button type="button" onClick={handleSubmitForgotPassword}>
            ForgotPassword
          </button>

          <button type="submit">Login</button>
          <button onClick={Register}>Register</button>
          {/* <div>
              <button  onClick={ Logout}>Logout</button>
        </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
