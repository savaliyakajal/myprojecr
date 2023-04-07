import React, { useEffect, useState } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Registration() {
  const Nvigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const [userData, setUserData] = useState();

  // useEffect(() => {
  //   console.log("userData---------------->", userData);
  //   // userData==undefined ?console.log("-----flase--------"):console.log("---true--------",userData.name)
  // }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      cpassword: event.target.cpassword.value,
    };

    // console.log("--------userdetails------------", user);
    setUserData(user);

    if (
      user.name !== "" &&
      (user.password !== "") & (user.cpassword !== "") & (user.email !== "")
    ) {
      if (user.password === user.cpassword) {
        let val = JSON.parse(localStorage.getItem("userlt"));
        if (val === null) {
          localStorage.setItem("userlt", JSON.stringify([user]));
        } else {
          val.push(user);
          localStorage.setItem("userlt", JSON.stringify(val));
          toast.success("you aer secceefuly register!", {
            position: toast.POSITION.Top_right,
          });
        }
        Nvigate("/Login");
      } else {
        toast.error("password ans cpassword is not mach", {
          position: toast.POSITION.Top_RIGHT,
        });
        // <Alert variant="danger">password ans cpassword is not mach</Alert>;
        // alert("pass and cpassword not mach");
      }
    } else {
      toast.error("this field is required", {
        position: toast.POSITION.Top_right,
      });
      // <Alert variant="danger">this field is required</Alert>;
      // alert("this field is required");
    }
  };
  const Loging = () => {
    Nvigate("/Login");
  };

  // useEffect(()=>{
  //   alertmeg()
  // },[userData])

  // function alertmeg() {
  //   if (userData?.name !== undefined) {
  //     if (userData.password === userData.cpassword) {
  //       Nvigate("/Login");
  //     } else {
  //       return   <Alert variant="danger">password ans cpassword is not mach</Alert>;
  //     }
  //     return   <Alert variant="danger">this field is required</Alert>;
  //   }else{
  //     return <Alert variant="danger">this field is required</Alert>;
  //   }
  // }

  return (
    <div>
      <Container>
        <ToastContainer />
        {/* {alertmeg()} */}
        {/* {userData?.name !==undefined ? userData.password === userData.cpassword 
        ?
        ( <Alert variant="success">you aer secceefuly register</Alert>
        
        )
          :
          ( <Alert variant="danger">password and confirm password do not match</Alert>)
          :
          (<Alert variant="danger">all fields are required</Alert>)
          } */}
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Registration
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          required
                          pattern="^[_A-z]{2,15}$"
                          onChange={(event) => setName(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          required
                          // pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          data-minlength="8"
                          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="cpassword"
                          placeholder="Password"
                          required
                          data-minlength="8"
                          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                          onChange={(event) => setCPassword(event.target.value)}
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?
                        {/* {test === 1 ? ( */}
                        <button
                          onClick={Loging}
                          className="text-primary fw-bold"
                        >
                          Sign In
                        </button>
                        {/* ) : (
                          ""
                        )} */}
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Registration;
