import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "../App";
import { AppContext } from "../App";
import { UserContext } from "../App";

function Header(props) {
  // const [state, setState] = useState();

  const nav = useNavigate();

  const [user, setUser] = useContext(AppContext);

  // const name = useContext(UserContext)

  // console.log("-----test------",user[0])
  // useEffect(() => {
  //   let userdata = JSON.parse(localStorage.getItem("Login"));
  //   setState(userdata);
  // }, [nav]);
  // user[0].admin?console.log("-----true---------")
  // :
 
  console.log("-----admin---------", user.admin);
  console.log("-----user---------", user.user);
  console.log("-----false---------", setUser);

  
  const Logout = (state) => {
    localStorage.removeItem("Login");
    localStorage.removeItem("isAdmin");
    user.user="";
    user.admin=""
    nav("/Login");
    
  };
  // console.log("---------props.state-----------",props.state)

  return (
    <>
      {/* <p>{ props.state.email}</p> */}
      {/* {
        props.admin.email
      } */}
      <div className="header">
        <ul className="d_flex">
          {/* <li>
            <Link to="/Apit">Apit</Link>
          </li> */}
          {/*           
          {props.state === undefined ||
          props.state === "" ||
          props.state === null ? (
            ""
          ) : (
            <li><Link to="/Apit">Apit</Link></li>
          )} */}

          {user.user.email=== undefined  ? (
         ""
          ) : (
            <li>
              <Link to="/Apit">Apit</Link>
            </li>
          )}

          <li>
            <Link to="/Registration">Registration</Link>
          </li>

          <li>
            <Link to="/Props">Props</Link>
          </li>

          <li>
            <Link to="/Reducerdemo">Reducerdemo</Link>
          </li>


          {/* {props.admin === undefined ||
          props.admin === "" ||
          props.admin === null ? (
            ""
          ) : (
            <li>
            <Link to="/Hookmemo">Hookmemo</Link>
          </li>
          )} */}

          {user.admin.email === undefined  ? (
           ""
          ) : (
            <li><Link to="/Hookmemo">Hookmemo</Link></li>
          )}

          <li>
            {user.user.email == undefined && user.admin.email==undefined
              ?  <Link to="/Login">Login </Link>
              : <Link to="/Login" onClick={Logout}>
                Logout
              </Link>}
          </li>

          {/* <li>
            {props.state === undefined ||
            props.state === "" ||
            props.state === null ? (
              <Link to="/Login">Login </Link>
            ) : (
              <Link to="/Login" onClick={Logout}>
                Logout
              </Link>
              
            )}
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Header;
