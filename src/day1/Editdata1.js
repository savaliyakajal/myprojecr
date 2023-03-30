import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
// import { useForm } from "react-hook-form";

function Editdata(Data) {
 
  const Nevigate = useNavigate();
  let { id } = useParams();
  console.log(id);


  const [Editdata, setEditdata] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });
  console.log(Editdata.id);

  useEffect(() => {
    //  all data get 
    const data = JSON.parse(localStorage.getItem("crud"));
    console.log("data---",data);
    //  v edit no ek data male che
    data.map((v, i) => {
      console.log("demo" ,v);
      console.log("hi---", v.id == id);
      // v id & useparems id mache karavanu
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
 
    console.log(e);
    e.preventDefault();
    console.log(e);
    const mdata = {
     id:e.target.id.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    console.log(" updeta data-------data",mdata);
      // edit karel data male 
    //  local data get karavano
    let  getdata  = JSON.parse(localStorage.getItem("crud"));

    console.log("localstordatat-------data",getdata);

     const uniqdata= getdata.map((i)=>{
      console.log("valau---i", i);
      console.log("Edit --id", id);
      if( i.id == id){
        i=mdata;
      }
      return  i;
     });
     console.log("uniqdata----",uniqdata);
      localStorage.setItem("crud",JSON.stringify(uniqdata));

    
    Nevigate("/");
  }


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
