import React,{useState} from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { AES, enc } from "crypto-js";
function Newpassword(props) {
  const [state, setstate] = useState();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitNewpassword = (data) => {

    const CryptoJS = require("crypto-js");
    const key = "12345";
    // const key1 = "12345";
    var myPassword = data.password;
    var cpaas =data.cpassword;

    const encrypted = CryptoJS.AES.encrypt(myPassword,key,);

    const decrypted = CryptoJS.AES.decrypt(encrypted,key);

    console.log(encrypted.toString());

    console.log("-------------decrypted", decrypted.toString(enc.Utf8));

   

    data.password = encrypted.toString();
    data.cpassword=encrypted.toString();


    if (myPassword == cpaas) {

      console.log("----------true---------");


      let rgsval = JSON.parse(localStorage.getItem("reg"));
      const otpdata = JSON.parse(localStorage.getItem("Otp"));
 
      let user = rgsval.find((user) => user.id === otpdata.id);
      if (user) {
        user.password = data.password;
        user.cpassword = data.cpassword;

      }
      localStorage.setItem("reg", JSON.stringify(rgsval));


      localStorage.removeItem("Otp");
      Navigate("/Login");
      alert("password Successfully Updeta");
    } else {
      alert("password  end conform password is not mach  ");
    }
    //   for (let i in rgsval) {
    //     if (rgsval[i].id == otpdata.id) {
    //       rgsval[i].password = data.password;
    //       rgsval[i].cpassword = data.cpassword;
    //     }
    //     localStorage.setItem("reg", JSON.stringify(rgsval));
    //     localStorage.removeItem("Otp");

    //     Navigate("/Login");
    //     alert("password Successfully Updeta");
    //     break;
    //   }
    // } else {
    //   alert("password  end conform password is not mach  ");}
  };
  return (
    <div>
      <div className="App">
        <p className="title">Reset password Form</p>
        <form onSubmit={handleSubmit(onSubmitNewpassword)}>
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
          {errors.password == "" ? (<p className="error">{"password is required"}</p>)
          :
          <p className=" error">{"password a to z capital & small  number & special cherecter  is required"}</p>
          }
        
          {/* {errors.password && } */}
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

          <button type="submit"> Newpassword</button>
        </form>
      </div>
    </div>
  );
}

export default Newpassword;
