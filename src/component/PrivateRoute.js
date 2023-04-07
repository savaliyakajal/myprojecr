import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../App";
function PrivateRoute({ children }) {
  // console.log("--------children----------",children)
  const [user, setUser] = useContext(AppContext);

  // console.log("----------user", user.admin.email);
  if (user.admin.email) {
    return <div> {children}</div>;
  } else {
    return <Navigate to="/Login" />;
  }
}

export default PrivateRoute;
