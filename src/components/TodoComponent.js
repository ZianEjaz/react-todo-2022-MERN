import React, { useEffect, useState } from "react";
import { WaveSpinner } from "react-spinners-kit";
import {
  MdDeleteForever,
  MdAddCircle,
  MdModeEditOutline,
} from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components import
import Search from "./Search";

const MainContent = () => {
  // state hooks
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [buttonText, setButtonText] = useState("Add");
  const [editIndex, setEditIndex] = useState();

  //function to get userinput and add a todo to fetched array
  const addTodo = () => {
    if (inputText !== "" && buttonText === "Add") {
      setTodoArray([...todoArray, inputText]);
      setInputText("");
      toast.success(`New Todo Added`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
      });
    } else if (buttonText === "Update") {
      todoArray[editIndex] = inputText;

      setButtonText("Add");
      setInputText("");
      toast.success(`Todo Updated`, {
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

  const editTodo = (index) => {
    setEditIndex(index);
    setInputText(todoArray[index]);
    setButtonText("Update");
  };

  // detect enter pressed
  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     if (event.key === "Enter") {
  //       addTodo();
  //     }
  //   };
  //   document.addEventListener("keydown", keyDownHandler);
  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=3")
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
    <div className="flex flex-wrap justify-center h-full w-screen">
      <ToastContainer />
      <div className="bg-gray-50 pt-8 pb-8 rounded-2xl shadow-xl lg:w-1/3 m-5 h-auto w-full ">
        <div className=" shadow-lg px-8 pb-5 flex content-center justify-center">
          <Search
            func={(event) => setInputText(event.target.value)}
            value={inputText}
            placeholder="Please enter a TODO"
          />

          <button
            onClick={addTodo}
            className=" flex p-2.5 bg-gray-500 text-white rounded my-auto w-auto"
          >
            <MdAddCircle className="text-xl my-auto mr-2" /> {buttonText} Todo
          </button>
        </div>

        <div className="overflow-y-scroll" style={{ maxHeight: "50vh" }}>
          <div className="w-full flex justify-center">
            <WaveSpinner
              size={100}
              color="#686769"
              loading={loadingAnimation}
            />
          </div>

          {todoArray.map((todo, index) => {
            return (
              <div className="flex" key={index}>
                <div className="border-b hover:bg-gray-300 break-words flex p-3 w-full">
                  <p className="w-full">{todo}</p>
                </div>
                <div className="delete-btn text-xl cursor-pointer text-white m-auto place-self-center flex">
                  <span className="bg-green-600 p-3" onClick={() => editTodo(index)}>
                    <MdModeEditOutline />
                  </span>
                  <span className="bg-red-600 p-3"  onClick={() => deleteTodo(index)}>
                    <MdDeleteForever/>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
