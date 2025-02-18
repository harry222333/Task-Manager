import React, { useEffect, useRef, useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import TaskList from "./taskList";

const TaskForm = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
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

  const deleteTodo = (id) => {
    setTodoList((prvTodos)=>{
    return  prvTodos.filter((todo)=> todo.id !== id)
    })
  }

  const toggle = (id) =>{

    setTodoList((prevtodos)=>{
      return prevtodos.map((todo)=>{
         if(todo.id == id ){
          return {...todo , isComplete: !todo.isComplete}
         }
         return todo;
      })

    })
  }

  useEffect(()=>{
   localStorage.setItem("todos" , JSON.stringify(todoList));
  },[todoList])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-7">
        <AiFillCalendar size={40} />
        <h1 className="text-2xl font-semibold">Task Manager App</h1>
      </div>

      {/* input field */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add task Here"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-16 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="boorder-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/* todo  */}

      <div>
        {todoList.map((item, index) => {
          return <TaskList key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />;
        })}
        {/* <TaskList text="learn coding" />
        <TaskList text="learn coding from me" /> */}
      </div>
    </div>
  );
};

export default TaskForm;
