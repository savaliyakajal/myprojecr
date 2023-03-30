import { Route, Routes } from "react-router-dom";
import Apit from "./ component/Apit";

import AdminRoutes from "./ component/auth/AdminRoutes";
import ProtectedRoutes from "./ component/auth/ProtectedRoutes";

import Editdata from "./ component/Editdata";
import Home from "./ component/Home";
import Hookmemo from "./ component/Hookmemo";
import Layout from "./ component/Layout";
import "./App.css";
import ForgotPassword from "./login/ForgotPassword";
import Login from "./login/Login";
import Newpassword from "./login/Newpassword";
import Otp from "./login/Otp";
import Registration from "./login/Registration";

import Header from "./ component/Header";
import React, { useState, useEffect, createContext } from "react";
import Props from "./ component/Props";
import Reducerdemo from "./ component/Reducerdemo";

export const AppContext = createContext();
// export const UserContext = createContext();

function App(props) {
  // const [state, setState] = useState("");
  // const [admin, setAdmin] = useState("");
  const [loginuser, setLoginuser] = useState({
    admin: {},
    user: {},
    abc:{}
  });

  // console.log(".........loginuser", loginuser);
  // console.log(".........admin", admin);

  // console.log("-----userapp------", state);

  // useEffect(() => {
  //   let userdata = JSON.parse(localStorage.getItem("Login"));
  //   const isAdmin = (localStorage.getItem("isAdmin"));
  //   setState(userdata);
  //   setAdmin(isAdmin)
  // }, []);

  // function getdata(data) {
  //   setLoginuser(data);
  //   console.log(".. pro...", data);
  // }

  function data(data) {
    // setLoginuser(data);
    if (data.email === "kajal123@gmail.com" && data.password === "1234567") {
      // setAdmin(data);
      setLoginuser({ ...loginuser, admin: data });
      alert("admin");
    } else {
      setLoginuser({ ...loginuser, user: data });
    }
  }

  return (
    <>
      {/* <UserContext.Provider value={user}>
      <Header/>
      </UserContext.Provider> */}

      <AppContext.Provider value={[loginuser, setLoginuser]}>
        <div className="App">
          {/* {data} */}
          {/* <Header   /> */}
          {/* <Header state={state} admin={admin} /> */}
          <Header />
          <Routes>
            <Route
              path="/Apit"
              element={
                <Layout>
                {/* <ProtectedRoutes state={loginuser}> */}
                  <ProtectedRoutes >
                    <Apit />
                  </ProtectedRoutes>
                </Layout>
              }
            />
            <Route
              path="/Registration"
              element={
                <Layout>
                  <Registration />
                </Layout>
              }
            />
            <Route
              path="/Reducerdemo"
              element={
                <Layout>
                  <Reducerdemo />
                </Layout>
              }
            />
            <Route
              path="/Props"
              element={
                <Layout>
                  {/* <UserContext.Provider value={state}> */}
                  <Props/>
                  {/* <Props getdata={getdata} meg={"dhfshfdf"} /> */}
                  {/* </UserContext.Provider> */}
                </Layout>
              }
            />
            <Route
              path="/Login"
              element={
                <Layout>
                  <Login data={data} />
                </Layout>
              }
            />

            <Route
              path="/Hookmemo"
              element={
                <Layout>
                  <AdminRoutes >
                    <Hookmemo />
                  </AdminRoutes>
                </Layout>
              }
            />
            <Route
              path="/Home"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/Editdata/:id"
              element={
                <Layout>
                  <Editdata />
                </Layout>
              }
            />

            <Route
              path="/ForgotPassword"
              element={
                <Layout>
                  <ForgotPassword />
                </Layout>
              }
            />
            <Route
              path="/Newpassword"
              element={
                <Layout>
                  <Newpassword />
                </Layout>
              }
            />
            <Route
              path="/Otp"
              element={
                <Layout>
                  <Otp />
                </Layout>
              }
            />
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
