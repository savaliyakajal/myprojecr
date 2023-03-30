import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
function Editdata() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const Nevigate = useNavigate();
  let { id } = useParams();
 

  const [Editdata, setEditdata] = useState();


  useEffect(() => {
    setValue("name", Editdata?.name);
    setValue("id", Editdata?.id);
    setValue("email", Editdata?.email);
    setValue("phone", Editdata?.phone);
  });

  useEffect(() => {
    const fdata = JSON.parse(localStorage.getItem("cruformdatad"));
    fdata.map((v) => {
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

  const onSubmitHandler = (data) => {
    console.log(data);

    let getdata = JSON.parse(localStorage.getItem("cruformdatad"));
    getdata.map((v, i) => {
      if (v.id == id) {
        getdata.splice(i, 1, data);
      }
      console.log(getdata);
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
    Nevigate("/Apit");
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <label htmlFor="id"> id</label>
            <input {...register("id", {})} placeholder="id" type="id" />
          </div>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              {...register("name", {
                required: true,
                maxLength: 20,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder="name"
              type="Text"
            />
          </div>
          {errors.name && <p className="error">{"name is required"}</p>}
          <div>
            <label htmlFor="phone"> Phone</label>
            <input
              {...register("phone", {
                required: true,
                pattern: /[0-9]{10}/,
              })}
              placeholder="phone"
              type="Number"
            />
          </div>
          {errors.phone && <p className="error">{"phone is required"}</p>}
          <div>
            <label htmlFor="email"> Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i,
              })}
              placeholder="email"
              type="email"
            />
          </div>
          {errors.email && <p className="error">{"email is required"}</p>}
          <input type="submit" />
          <button variant="secondary">Close</button>
        </Form>
      </div>
    </div>
  );
}

export default Editdata;
