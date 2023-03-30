import React, { useState } from "react";

function Hookmemo(props) {
  const [conute, setconute] = useState(0);
  const calciletion = calciletionexpensive(conute);

  const Increment = () => {
    setconute((c) => c + 1);
  };
  return (
    <>
      conute:{conute}
      <button onClick={Increment}>+</button>
      <h1>calciletion </h1>
      {calciletion}
    </>
  );
}

const calciletionexpensive = (num) => {
  console.log();
  for (let i = 0; i < 0; i++) {
    num += 1;
  }
  return num;
};

export default Hookmemo;
