import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Login from "./ Login";
function ForgotPassword(props) {
  const [otp, setOtp] = useState();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForgotdata = (data) => {
    data.id = new Date();

    let getdata = JSON.parse(localStorage.getItem("reg"));
    let user = getdata.find((user) => user.email === data.email);
    // console.log(user);
    // console.log(user.email === data.email);
    // for (let i in getdata) {
    if (user) {
      if (user.email == data.email) {
        data.Otp = Math.floor(Math.random() * 10000);

        // alert(data.Otp);
        data.id = user.id;

        localStorage.setItem("Otp", JSON.stringify(data));

        Navigate("/Otp");
      }
    } else {
      alert(" email is not mach");
    }
  };

  return (
    <div>
      <div className="App">
        <p className="title"> Email Form</p>
        <form onSubmit={handleSubmit(onSubmitForgotdata)}>
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
              {errors.email && <p className="error" >{"email is required"}</p>}
          </div>
          {errors.email && <p>{"email is required"}</p>}

          <button type="submit"> Send Otp</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
