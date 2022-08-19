import React, { useEffect, useState } from "react";
import { WaveSpinner } from "react-spinners-kit";
import { MdDeleteForever, MdClose, MdAddCircle } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Animated } from "react-animated-css";

// components import
import Search from "./Search";

const MainContent = () => {
  // state hooks
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [isVisible, setisVisible] = useState(true);

  //function to get userinput and add a todo to fetched array
  const addTodo = () => {
    if (inputText !== "") {
      setTodoArray([inputText, ...todoArray]);
      setInputText("");
      toast.success(`New Todo Added`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
      });
    }
  };

  const deleteTodo = (index) => {
    todoArray.splice(index, 1);
    setTodoArray([...todoArray]);
    toast.error(`Todo Deleted`, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
    });
  };

  // detect enter pressed
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        addTodo();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [inputText]);

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
    <div className="flex flex-wrap justify-center bg-gray-200 h-screen">
      <ToastContainer />
      <div className="bg-gray-50 pt-8 pb-8 rounded-2xl shadow-xl lg:w-1/3 m-5 md:m- h-auto">
        <div className=" shadow-lg px-8 pb-5 flex content-center justify-center">
          <Search
            func={(event) => setInputText(event.target.value)}
            value={inputText}
            placeholder="Please enter a TODO"
          />

          <span className="my-auto">
            <button
              onClick={addTodo}
              className=" flex p-2.5 bg-gray-500 text-white rounded my-auto"
            >
              <MdAddCircle className="text-xl my-auto mr-2" /> Add Todo
            </button>
          </span>
        </div>

        <div className="overflow-y-scroll" style={{ maxHeight: "70vh" }}>
          <div className="w-full flex justify-center">
            <WaveSpinner
              size={100}
              color="#686769"
              loading={loadingAnimation}
            />
          </div>

          {todoArray.map((todo, index) => {
            return (
              <Animated
                animationIn="animate__fadeInLeft"
                animationOut="animate__fadeOutLeft"
                isVisible={isVisible}
                key={index} className="flex"
              >
                  <div className="border-b hover:bg-gray-300 break-words flex p-3 w-full">
                    <p className="w-full">{todo}</p>
                  </div>

                  <span
                    className="delete-btn text-xl cursor-pointer text-white bg-red-600 m-auto p-3 place-self-center hidden"
                    onClick={() => deleteTodo(index)}
                  >
                    <MdDeleteForever />
                  </span>
              </Animated>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
