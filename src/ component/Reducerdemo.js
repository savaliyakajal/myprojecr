import React, { useReducer,useMemo } from "react";
const initialState = { count: 0, count1: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECRIMENT":
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };

    case "increment":
      return { ...state, count1: state.count1 + 1 };

    case "decrement":
      return {
        ...state,
        count1: state.count1 > 0 ? state.count1 - 1 : state.count1,
      };

    default:
      return state;
  }
}
function Reducerdemo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  const incrementCount = () => {
    dispatch({ type: "INCREMENT" });
  };

  const dicrementCount = () => {
    dispatch({ type: "DECRIMENT" });
  };

  const incre = () => {
    dispatch({ type: "increment" });
  };
  const dicre = () => {
    dispatch({ type: "decrement" });
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count.count));

  return (
    <>   
    {calculation}
      <button onClick={incrementCount}>+</button>
      Count: {count.count}
      <button onClick={dicrementCount}>-</button>
      <br />
      <button onClick={incre}>+</button>
      Count1: {count.count1}
      <button onClick={dicre}>-</button>
      
    </>
  );
}

export default Reducerdemo;
