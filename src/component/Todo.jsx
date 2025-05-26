// import React from 'react'
import { useRef, useState } from "react";
import Todo_icon from "../Images/todo.png";
import TodoItems from "./Todoitems";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);

    inputRef.current.value = "";
  };
  return (
    <div className="bg-white place-self-center w-full  max-w-xl  flex  flex-col p-10 min-h-[660px] rounded-lg" >
    {/*------ title --------*/}

      <div className="flex item-center mt-7 gap-2 ">
        <h1 className="text-xl font-bold font-sans text-green-500 ">
          MY TO DO LIST APP
        </h1>
        <img src={Todo_icon} alt="" className="w-10" />
      </div>

      {/*------ Input box -------*/}

      <div className="flex items-center my-4 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-green-400 w-32 h-14 text-white text-lg cursor-pointer"
        >
          {" "}
          <b> ADD </b>
        </button>
      </div>

      {/*------ todo list-------*/}

      <div className="w-full break-all">
        {todoList.map((item, index) => {
          return <TodoItems key={index} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
