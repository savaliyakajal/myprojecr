import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate,  } from "react-router-dom";
import { useForm } from "react-hook-form";
function Home(props) {
const { register, handleSubmit, formState: { errors } } = useForm();
  const Nevigate = useNavigate();
  const [value, setValue] = useState()

  console.log("value", value)
//  inputdata hendel karva


  const onSubmitHandler = (e) => {
    console.log("e---",e);
    // setValue(e.target.value)
    e.preventDefault();
  
   if (e.target.name.value !== "") {
     
   }
    const data = {
      id: Math.floor(Math.random() * 10000),
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    console.log("target---",e.target)
    console.log("target---name",e.target.name)
    console.log("target---name -value",e.target.name.value)
    console.log(data);
    setValue(data)
    let localdata = JSON.parse(localStorage.getItem("crud"));
    console.log("value===============>", value)
  //  localStorage getItem

    if (localdata === null) {
      localStorage.setItem("crud", JSON.stringify([data]));
      // setdata in localStorage
    } else {
      localdata.push(data);

      localStorage.setItem("crud", JSON.stringify(localdata));
    }

    Nevigate("/");
    // send to  dispey apit
  };

  return (
    <div>
      <div>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Name</Form.Label>
            
            <Form.Control type="text" name="name" autoFocus />

          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>phone</Form.Label>
            <Form.Control type="number" name="phone" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" autoFocus />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <button variant="secondary">Close</button>
            <button type="submit" className="btn btn-primary ms-3">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Home;
