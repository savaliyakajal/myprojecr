import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Otp(props) {
  const [otp, setOtp] = useState();

  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let getdata = JSON.parse(localStorage.getItem("Otp"));
    setOtp(getdata.Otp);
  }, []);

  const onSubmitOtp = (data) => {

    const val = JSON.parse(localStorage.getItem("Otp"));

    if (val.Otp == data.otp) {
      // console.log("------", val.otp == data.otp);
      alert("otp is Successfully updeta");
      Navigate("/Newpassword");
    } else {
      alert(<p className="error">" otp is not mach"</p>);
    }
  };


  return (
    <div>
      <div>
   
        <div className="App">
          <p className="title"> Otp Form</p>
          <form onSubmit={handleSubmit(onSubmitOtp)}>
            <div>
              <label htmlFor="otp"> OTP</label>
              <input
                {...register("otp", {
                  required: true,
                })}
                placeholder="OTP"
                type="password"
              />
              <h6>{otp}</h6>
            </div>
            {errors.otp && <p className="error">{"otp is required"}</p>}

            <button type="submit"> submit Otp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;
