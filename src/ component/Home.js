import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Home(props) {
 
  const {
    unregister,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Nevigate = useNavigate();

  const onSubmitHandler = (data) => {
    data.id = Math.floor(Math.random() * 10000);
   
    let localdata = JSON.parse(localStorage.getItem("cruformdatad"));
    if (localdata === null) {
      localStorage.setItem("cruformdatad", JSON.stringify([data]));
    } else {
      localdata.push(data);
      localStorage.setItem("cruformdatad", JSON.stringify(localdata));
    }
    Nevigate("/Apit");
  };
  
  return ( 
    <div>
      <div>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              {...register("name", {
                required: true,
                maxLength: 20,
               minLength:3,
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder="name"
              type="Text"
            />
          </div>
          {errors.name && <p className="error">{"name  mats be  required minimum  3 characters"}</p>}
          <div>
            <label htmlFor="phone"> Phone</label>
            <input
              {...register("phone", {
                required: true,
                pattern:/^(\+\d{1,3}[- ]?)?\d{10}$/
              })}
              placeholder="phone"
              type="Number"
            />
          </div>
          {errors.phone && <p className="error">{"phone  Number  must be required"}</p>}
          <div>
            <label htmlFor="email"> Email</label>
            <input
              {...register("email", {
                required: true,
                pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
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
export default Home;
