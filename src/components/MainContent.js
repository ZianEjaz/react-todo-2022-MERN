import React, { useEffect, useState } from "react";
import { WaveSpinner } from "react-spinners-kit";
import { MdDeleteForever, MdClose } from "react-icons/md";

// components import
import Search from "./Search";

const MainContent = () => {
  // state hooks
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  //function to get userinput and add a todo to fetched array
  const addTodo = async (event) => {
    if (event.key === "Enter") {
      setTodoArray([...todoArray, event.target.value]);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10")
      .then((res) => res.json())
      .then((res) => {
        const todoTitle = res.map((todo) => {
          return todo.title;
        });
        setTodoArray(todoTitle);
      })
      .then(() => setLoadingAnimation(false));
    // setTimeout(()=>setLoadingAnimation(false), 2000)
  }, []);

  return (
    <div className="flex flex-wrap justify-center content-center bg-gray-200 h-screen">
      <div className="bg-gray-50 pt-8 pb-8 rounded-2xl shadow-xl lg:w-1/3 m-5 md:m-0">
        <div className="px-8 pb-5">
          <Search
            func={(event) => addTodo(event)}
            placeholder="Please enter a TODO"
          />
        </div>
        <div className="overflow-y-scroll" style={{ maxHeight: "70vh" }}>
          <div className="w-full flex justify-center">
            <WaveSpinner
              class="bg-green-300"
              size={100}
              color="#686769"
              loading={loadingAnimation}
            />
          </div>

          {todoArray.map((todo, index) => {
            return (
              <div key={index} className="flex">
                <div className="border-b hover:bg-gray-300 break-words flex p-3 w-full">
                  <p className="w-full">{todo}</p>
                  <span className="text-xl cursor-pointer text-red-600 m-auto">
                    <MdClose />
                  </span>
                </div>

                <span className="text-xl cursor-pointer text-white bg-red-600 m-auto p-3 place-self-center" onClick={()=>console.log(1)}>
                  <MdDeleteForever />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
