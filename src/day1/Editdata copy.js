import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function Editdata() {
  const Nevigate = useNavigate();
  let { id } = useParams();
  const [data, setData]= useState();
  const [Editdata, setEditdata] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cruformdatad"));
    data.map((v) => {
      if (v.id == id) {
        setEditdata({
          id: v.id,
          name: v.name,
          email: v.email,
          phone: v.phone,
        });
      }
    });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const mdata = {
      id: e.target.id.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    let getdata = JSON.parse(localStorage.getItem("cruformdatad"));
      getdata.map((v, i) => {
      if (v.id == id) {
      
        getdata.splice(i, 1, mdata);
      } 
      console.log(getdata)
    });
    localStorage.setItem("cruformdatad", JSON.stringify(getdata));

  

    //     const uniqdata = getdata.map((i) => {
    //       if (i.id == id) {
    //         return{

    //           ...mdata,
    //         }
    //       }
    //       return i;
    //     });
    //     console.log(uniqdata);
    // localStorage.setItem("cruformdatad", JSON.stringify(uniqdata));


   

    // const uniqdata = getdata.map((i) => {
    //   if (i.id == id) {
    //     i = mdata;
    //   }
    //   return i;
    // });
    // localStorage.setItem("cruformdatad", JSON.stringify(uniqdata));
    Nevigate("/");
  };

  return (
    <div>
      <div>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> {id}</Form.Label>
            <Form.Control
              type="id"
              name="id"
              defaultValue={Editdata.id}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              defaultValue={Editdata.name}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>phone</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              defaultValue={Editdata.phone}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={Editdata.email}
              autoFocus
            />
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

export default Editdata;
