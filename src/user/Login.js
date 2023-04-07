import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();
  const hendellogin = (event) => {
    event.preventDefault();

    const userdata = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    props.data(userdata);
    let registerdata = JSON.parse(localStorage.getItem("userlt"));

    let user = registerdata.find((user) => user.email === userdata.email);
    // console.log(user.email === userdata.email);

    if (userdata.password === user.password) {
      if (
        userdata.email === "kajal123@gmail.com" &&
        userdata.password === "Kajal@123"
      ) {
        localStorage.setItem("Admin", "yes");
      }
      toast.success("you aer secceefuly register!", {
        position: toast.POSITION.Top_right,
      });
      Navigate("/Home");
      localStorage.setItem("Loginuser", JSON.stringify(userdata));
    }
  };
  const Registration = () => {
    Navigate("/Registration");
  };
  return (
    <>
      <div>
        <ToastContainer />
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Login
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={hendellogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                            //   pattern="/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i"
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
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </Form.Group>

                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Sign In
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <button
                            type="submit"
                            onClick={Registration}
                            className="text-primary fw-bold"
                          >
                            Sign Up
                          </button>
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
    </>
  );
}

export default Login;
