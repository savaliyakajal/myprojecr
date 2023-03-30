import React,{useContext} from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../App"
function ProtectedRoutes({  props, children }) {

  const [user, setUser] = useContext(AppContext);
  console.log(user.user);
  // const Navigate = useNavigate();
  // const isLogin = JSON.parse(localStorage.getItem("Login"));
    // console.log(isLogin);

  //  if (isLogin) { 
  //   // console.log(isLogin);
  //   return <div> {children}</div>;
  // } else{
  //   return <Navigate to="/Login" />;
  // }
  // if ("props.state") { 
  //   // console.log(props.state);
  //   return <div> {children}</div>;
  // } else{
  //   return <Navigate to="/Login" />;
  // }

  
  console.log("-----------user-value-------------",user.user.email )
  
   if (user.user.email) {
      // return <Navigate to="/Login" />;
  // console.log("--------------------------true",user.user);
   return <div> {children}</div>;
  } else{
    // console.log("--------------------------false",);
    return <Navigate to="/Login" />;
      // return <div> {children}</div>;
   }
}

export default ProtectedRoutes;
