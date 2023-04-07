import React, { useState } from "react";

import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  Alert,
} from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import Select from "react-select";
// import axios from "axios";

function Createuser(id) {
  const [imageUrl, setImageUrl] = useState();

  // console.log(imageUrl.picturePreview);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    data.id = 0;
    data.picture = URL.createObjectURL;
    // setImages(data);
    // console.log(data);
    // const img = data.picture[0];
    //
    //
    // const formData = new FormData();
    // formData.append("picture", img);

    // const formData = new FormData();
    // formData.append("file", .pictureAsFile);

    // console.log(picture.pictureAsFile);

    // const obj = {
    //   text: "fdjshg fdjsfg",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png",
    //   likes: 0,
    //   tags: ['tag1'],
    //   owner: "60d0fe4f5311236168a10a0f"
    //   }
    // let obj = {
    //   title: "mr",
    //   firstName: "Sdfsdfsdf",
    //   lastName: "Basoglu",
    //   email: "guleh3@gmail.com",
    //   picture: "https://randomuser.me/api/portraits/med/men/59.jpg"
    // }
    fetch(`https://dummyapi.io/data/v1/user/create`, {
      method: "POST",

      headers: {
        "app-id": "639172c734f59a65dd76d340",
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    // .then((response) => response.json())
    // .then((response) => {
    //   console.log(response);
    // });
    // axios.post("https://dummyapi.io/data/v1/user/create",
    // obj, {headers: { "app-id": "639172c734f59a65dd76d340" }})
    navigate("/Apidata");
  };

  const uploadPicture = (e) => {
    console.log(e);
    setImageUrl({
      picturePreview: URL.createObjectURL(e.target.files[0]),
      pictureAsFile: e.target.files[0],
    });
  };

  return (
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <Card className="px-4">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-center text-uppercase ">
                Registration
              </h2>
              <div className="mb-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="text-center" htmlFor="firstName">
                      {" "}
                      firstName
                    </label>
                    <input
                      {...register("firstName", {})}
                      placeholder="firstName"
                      type="Text"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-center" htmlFor="lastName">
                      {" "}
                      lastName
                    </label>
                    <input
                      {...register("lastName", {})}
                      placeholder="lastName"
                      type="Text"
                    />
                  </div>
                  {errors.name && (
                    <p className="error">
                      {"lastName  mats be  required minimum  2 characters"}
                    </p>
                  )}
                  <div className="mb-3">
                    <label className="text-center" htmlFor="title">
                      {" "}
                      title
                    </label>

                    <select {...register("title")}>
                      <option value="ms">ms</option>
                      <option value="miss">miss</option>
                      <option value="mrs">mrs</option>
                      <option value="dr">dr</option>
                      <option value="mr">mr</option>
                    </select>
                  </div>
                  {errors.title && (
                    <p className="error">{"title    must be required"}</p>
                  )}
                  <div className="mb-3">
                    <label className="text-center" htmlFor="Gender">
                      {" "}
                      Gender
                    </label>

                    <select {...register("Gender")}>
                      <option value="male">male</option>
                      <option value="Female">Female</option>
                      <option value="othre">othre</option>
                    </select>
                  </div>
                  {errors.title && (
                    <p className="error">{"title    must be required"}</p>
                  )}

                  <div className="mb-3">
                    <label className="text-center" htmlFor="email">
                      {" "}
                      email
                    </label>
                    <input
                      {...register("email", {
                        // required: true,
                      })}
                      placeholder="email"
                      type="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-center" htmlFor="picture">
                      {" "}
                      picture
                    </label>
                    <input
                      {...register("picture", {
                        // required: true,
                      })}
                      placeholder="picture"
                      type="file"
                      onChange={uploadPicture}
                    />

                    {imageUrl && (
                      <div>
                        <div>Image Preview:</div>
                        <img src={imageUrl.picturePreview} />
                      </div>
                    )}
                  </div>
                  <button type="submit" variant="secondary">
                    submit
                  </button>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Createuser;
