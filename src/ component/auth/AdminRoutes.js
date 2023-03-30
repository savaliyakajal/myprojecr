import React,{useContext}from 'react';
import ReactDOM from "react-dom";
import { AppContext } from "../../App"
import { Navigate } from "react-router-dom";
function AdminRoutes(props) {


  const [user, setUser] = useContext(AppContext);
  // console.log("..---------true", user);
    // const Navigate = useNavigate();
    // const isAdmin = (localStorage.getItem("isAdmin"));
    // console.log(isAdmin);
    if (user.admin.email) {
   
       return <div> {props.children}</div>
      }
    else{
     
      return <Navigate to="/Login" />
    }
}

export default AdminRoutes;