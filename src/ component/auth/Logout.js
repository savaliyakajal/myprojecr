import React from 'react';
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";
function Logout(props) {
    const Navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem("logindata");
        Navigate("/Login");
      };
    
    return (
        <div>
              <button  onClick={ Logout}>Logout</button>
        </div>
    );
}

export default Logout;