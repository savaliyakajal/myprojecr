import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { AES, enc } from "crypto-js";
//
function Ragistration(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Navigate = useNavigate();

  const onSubmitRegister = (data) => {
    
    data.id = new Date(); 
    
    const CryptoJS = require("crypto-js");
    const key = "12345";
    var myPassword = data.password;

    const encrypted = CryptoJS.AES.encrypt(myPassword, key);
    const decrypted = CryptoJS.AES.decrypt(encrypted, key);

    // console.log(encrypted.toString());

    // console.log("-------------decrypted", decrypted.toString(enc.Utf8));
    data.password = encrypted.toString();
    
    let val = JSON.parse(localStorage.getItem("reg"));
    if (val === null) {
      localStorage.setItem("reg", JSON.stringify([data]));
    } else {
      val.push(data);
      localStorage.setItem("reg", JSON.stringify(val));
    }
    Navigate("/Login");
 
  };
  return (
    <div>
      <div className="App">
        <p className="title ">Register Form</p>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              {...register("name", {
                required: true,
                maxLength: 15,
                minLength:3,
                pattern: /^[A-Za-z]+$/i 
              })}
              placeholder="name"
              type="Text"
            />
          </div>
          {errors.name && <p className="error">{"min lentgth 3 cherecter  mex lentgthis  15 cherecter num is not vlid required"}</p>}

          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
              })}
              placeholder="bluebill1049@hotmail.com"
              type="email"
            />
          </div>
          {errors.email && <p className="error" >{"email is required"}</p>}
          <div>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: true,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
              })}
              placeholder="password"
              type="password"
            />
          </div>
          {errors.password && <p className=" error">{"password a to z capital & small  number & special cherecter  is required"}</p>}
          <div>
            <label htmlFor="cpassword"> Confrom Password</label>
            <input
              {...register("cpassword", {
                required: true,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
              })}
              placeholder="Confrompassword "
              type="password"
            />
          </div>
          {errors.cpassword && <p className="error">{"Confrompassword is required"}</p>}
         
          <button type="submit">Sign Up</button>
      
        </form>
      </div>
    </div>
  );
}

export default Ragistration;
