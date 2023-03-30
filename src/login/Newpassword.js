import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

function Newpassword(props) {
  const Navigate = useNavigate();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      password: event.target.password.value,
      confirmpassword: event.target.cpassword.value,
    };

    let fdata = data.password;
    let encoded = window.btoa(fdata);
    data.password = encoded;

    if (data.password?.length >=6 && data.confirmpassword?.length >=6) {
      if (password == confirmpassword) {
        let register = JSON.parse(localStorage.getItem("register"));
        const otpdata = JSON.parse(localStorage.getItem("Otp"));

        let user = register.find((user) => user.id === otpdata.id);

        console.log(user);
        if (user) {
          user.password = data.password;
        }
        localStorage.setItem("register", JSON.stringify(register));
        localStorage.removeItem("Otp");
        Navigate("/Login");
        alert("password Successfully Updeta");
      } else {
        alert("password  end confirm password is not mach  ");
      }
    } else {
      alert("please check  required");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        </div>
        <div>
          <label> canfrom password</label>
          <input
            type="password"
            name="cpassword"
            onChange={(event) => setConfirmpassword(event.target.value)}
          />
          {confirmpassword == undefined ? (
            ""
          ) : confirmpassword == 0 || confirmpassword.length >=6 ? (
            ""
          ) : (
            <span> cpasssword must be at least 6 characters</span>
          )}
        </div>
        <button type="submit">password</button>
      </form>
    </div>
  );
}

export default Newpassword;
