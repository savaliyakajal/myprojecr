import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Registration(props) {
  const Navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  // const [loginuser, setLoginuser] = useState();nmp start
 
  var nameRegex =/^[A-Za-z]+$/i
  // A regular expression is a pattern of characters.
  var emailRegex =/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      cpassword: event.target.cpassword.value,
    };

    data.id = Math.floor(Math.random() * 10000);
    // math . floor .pachi ni value  displey nthi kartu  0 and 1 beetwin  number 
    let fdata = data.password;
    let mdata = data.cpassword;
    let encoded = window.btoa(fdata);
    // (btoa) string not readble (encoded)
    // method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string method encodes a string in base-64
    let decoded = window.atob(encoded);
    //  method decodes a base-64 encoded string convaret . readable
    data.password = encoded;
    data.cpassword = encoded;

    if (
      data["name"] != "" &&
      data["email"] != "" &&
      data["password"] != "" &&
      data["cpassword"] != ""
    ) {
      if (
        data.password?.length > 6 &&
        data.cpassword?.length > 6 &&
        data.name.length > 2 &&
        name.match(nameRegex) && email.match(emailRegex)
      ) {
        if (fdata == mdata) {
          let val = JSON.parse(localStorage.getItem("register"));
          if (val === null) {
            localStorage.setItem("register", JSON.stringify([data]));
          } else {
            val.push(data);
            props.data(data);
            // setLoginuser({...loginuser,registra:{data}})
            localStorage.setItem("register", JSON.stringify(val));
          }
          alert("Regitretion successfuly");
          Navigate("/Login");
        } else {
          alert("pass and cpassword not mach");
        }
      } else {
        alert(" please check  required");
      }
    } else {
      alert("this field is required");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Sign up</h2>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />

          {name == undefined ? (
            ""
          ) : name == 0 ||name.length>2 ||name.match(nameRegex) ? (
            ""
          ) : (
            <span>Name must be  required  minimum 2 least end Number is not valid</span> 
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          /> 
          {email == undefined ?  (
            ""
          ) : email == 0 ||  email.length>20?(
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
            placeholder="passwors"
            className="form-control"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          {password == undefined ? (
            ""
          ) : password == 0 || password.length>=6? (
            ""
          ) : (
            <span> passsword must be  required 6 least </span>
          )}

          {/* {password === "" || password === undefined || password === 0 ? (
            <span>password is required</span>
          ) : password === null || password?.length < 6 ? (
            <span> passsword must be at least 6 characters</span>
          ) : (
            ""
          )} */}
        </div>
        <div>
          <label>cpassword</label>
          <input
            type="password"
            name="cpassword"
            placeholder="password"
            className="form-control"
            onChange={(event) => setCPassword(event.target.value)}
            value={cpassword}
          />

          {cpassword == undefined ? (
            ""
          ) : cpassword == 0 || cpassword.length>=6? (
            ""
          ) : (
            <span> cpasssword must be  required 6 least </span>
          )}
          {/* {cpassword === "" || cpassword === undefined || cpassword === 0 ? (
            <span>cpassword is required</span>
          ) : cpassword === null || cpassword?.length < 6 ? (
            <span> cpasssword must be at least 6 characters</span>
          ) : (
            ""
          )} */}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Registration;
