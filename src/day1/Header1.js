
import { useState,createContext, useContext} from "react";

const UserContext =createContext();

function Header(props) {
  // const [user, setUser] = useState("hello every one ");

  return (
    <>
    <UserContext.Provider value={user}>
      <h1>{` hello ${user}!`}</h1>
      <Component2  />
      </UserContext.Provider>
    </>
  );
}
function Component2() {
    return (
      <>
        <h1>good</h1>
        <Component3/>
      </>
    );
  }
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Todos />
      </>
    );
  }

function Todos() {
    const user= useContext(UserContext);
    return (
      <>
        <h1> hello </h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  

export default Header;
