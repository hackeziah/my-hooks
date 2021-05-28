import React, { useEffect, useState } from "react";
import AddNewTodo from './AddNewTodo'
const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay Bills", id: 1 },
    { text: "Do Task in Atmos", id: 2 },
    { text: "Feed My Cats", id: 3 },
  ]);
  const [count, setCount]= useState(0);

  const addTodo = (text) => {
    setTodos([
        ...todos,  
        {text: text, id: Math.random()},
    ]);
  }

  useEffect(()=>{
      console.log(todos)
  },[todos]);



useEffect(()=>{
    console.log(count)
},[count]);


  return (
    <div>
      <ul>
        {todos ? todos.map((item)=>{
            return(
                <li key={item.id}> {item.text}</li>
            )
        }) : null}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button onClick={()=>setCount(count+1)}>Score {count}</button>
    </div>
  );
};

export default TodoList;
