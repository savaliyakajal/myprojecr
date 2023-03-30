 import React from 'react';
//  import{memo} from "react"
 
const Todos =( {todos, addtodo}) => {
    console.log("child render");
    return (
        <>
        <p> todo</p>
        {/* {todos.map((todos,index))=>

        
        } */}
        {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}

      <button  onClick={addtodo}>Add Todo</button>
        </>
    );
 }
 
 export default Todos;