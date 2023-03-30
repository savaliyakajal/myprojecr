import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  useMemo
} from "react";
import { UserContext } from "../App";

function Props({a,b}) {
  const [count, setCount] = useState(0);

  // const [state, setState] = useState();

  // const user = useContext(UserContext);

  // console.log("---------props-users--------------", user);

  // const handleSubmit = (event) => {
  //   console.log("--------handelsubmit---------", state);
  //   event.preventDefault();

  //   props.getdata(state);
  // };
  // let sendEmail = (e) => {
  //   setState(e.target.value);
  // };
  // const [ctime, setCtime] = useState(0);
  // const count = useRef(new Date().toLocaleTimeString());

  // const time = new Date().toLocaleTimeString();

  // const timer = () => setCtime((i) => i + 1);
  // count.current = setInterval(timer, 1000);

  const countRef = useRef(null);

  useEffect(() => {
    function name() {
      const time = new Date().toLocaleTimeString();
      countRef.current.innerHTML = `${time}`;
    }
    name();
    const intervalId = setInterval(name, 1000);
    return () => clearInterval(intervalId);
  }, []);


  let timerRef = useRef(null);
  
  useEffect(() => {
    function clock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      timerRef.current.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    clock();
    const intervalId = setInterval(clock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const dicrementCount = useCallback(() => {
    setCount(count > 0 ? count - 1 : count);
  }, [count]);

 
  return (
    <div>
      <div ref={timerRef}></div>

      <div ref={countRef}></div>
     
      {/* <h2>{`Hello ${user.email} again!`}</h2> */}
      {/* <h2>{`Hello ${user.password} again!`}</h2> */}
      {/* <p>{props.meg}</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={sendEmail} value={state} />
          <button type="submit">Login</button>
        </form> */}
      {/* <button>Login</button> */}
      <p>Count: {count}</p>
      
      <button onClick={incrementCount}>Increment</button>
      <button onClick={dicrementCount}>Increment</button>
    </div>
  );
}

export default Props;
