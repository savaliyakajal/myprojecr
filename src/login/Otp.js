import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

function Otp(props) {
  const Navigate = useNavigate();
  const [otp, setOtp] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      otp: event.target.otp.value,
    };
    const get = JSON.parse(localStorage.getItem("Otp"));

    if (get.Otp == data.otp) {
      // console.log("------", val.otp == data.otp);
      alert("otp is Successfully updeta");
      Navigate("/Newpassword");
    } else {
      alert(" otp is not mach");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Otp</label>
          <input
            type="number"
            name="otp"
            onChange={(event) => setOtp(event.target.value)}
          />
        </div>

        <button type="submit">submit otp</button>
      </form>
    </div>
  );
}

export default Otp;
