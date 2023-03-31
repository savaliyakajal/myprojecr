import React, {useReducer}from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
  {
    id: 4,
    title: "Todo 4",
    complete: false,
  },
  {
    id: 5,
    title: "Todo 5",
    complete: false,
  },
];
const todo1 = (state, action) => {
  switch (action.type) {
    case "TODOTASK":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

function Todos(props) {
  const [todos, dispatch] = useReducer(todo1, initialTodos);

  const hendelComplete = (todo) => {
    console.log(todo);
    dispatch({ type: "TODOTASK", id: todo.id });
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
      
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => hendelComplete(todo)}/>
            
            {todo.title}
        
        </div>
      ))}
    </>
  );
}

export default Todos;
