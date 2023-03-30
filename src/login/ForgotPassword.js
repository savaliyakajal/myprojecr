import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
function ForgotPassword(props) {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
 const handleSubmit=(event) =>{
    event.preventDefault();
    const data = {
      email: event.target.email.value,
     
    };
    data.id = Math.floor(Math.random() * 10000);;
    let getdata = JSON.parse(localStorage.getItem("register"));
    let user = getdata.find((user) => user.email === data.email);
    console.log(user);
    if (user) {
        if (user.email == data.email) {
          data.Otp = Math.floor(Math.random() * 10000);
  
          alert(data.Otp);
          data.id = user.id;
  
          localStorage.setItem("Otp", JSON.stringify(data));
  
          Navigate("/Otp");
        }
      } else {
        alert(" email is not mach");
      }
 }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
              {email !== "" && email !== null && email !== undefined ? (
            ""
          ) : (
            <span>Email is required</span>
          )}
          </div>

          <button type="submit">send otp</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
