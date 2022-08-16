import React, { useEffect, useState } from "react";

// components import
import Search from "./Search";

const MainContent = () => {
  // state hooks
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = (event)=>{
    let newArray = todoArray;
    if (event.key === "Enter") {
      newArray.push(event.target.value)
    }
    setTodoArray(newArray);
    console.log(todoArray)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10")
      .then((res) => res.json())
      .then((res) => {
        const todoTitle = res.map((todo)=>{
          return(todo.title)
        })
        setTodoArray(todoTitle)
      })
  }, []);

  return (
    <div className="flex flex-wrap justify-center content-center bg-gray-200 h-screen">
      <div className="bg-gray-50 pt-8 pb-8 rounded-2xl shadow-xl">
        <div className="px-8 pb-5">

        <Search
          func={(event) => addTodo(event)}
          placeholder="Please enter a TODO"
        />
        </div>
        <div className="overflow-auto" style={{maxHeight : "70vh"}}>
          {todoArray.map((todo, index) => {
            return (
              <p key={index} className="border-b p-3 hover:bg-gray-300">
                {todo}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
