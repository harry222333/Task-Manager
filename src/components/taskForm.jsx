import React, { useEffect, useRef, useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import TaskList from "./TaskList";

const TaskForm = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
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
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-full sm:w-11/12 lg:w-9/12 xl:w-8/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-4 sm:gap-7">
        <AiFillCalendar size={40} />
        <h1 className="text-2xl font-semibold">Task Manager App</h1>
      </div>

      <div className="flex flex-wrap items-center my-7 bg-gray-200 rounded-full px-4 py-2 gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add task here"
          className="bg-transparent border-0 outline-none flex-1 min-w-[200px] h-14 px-4 placeholder:text-slate-600"
        />

        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 px-6 h-14 text-white text-lg font-medium cursor-pointer whitespace-nowrap"
        >
          Add +
        </button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return (
            <TaskList
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskForm;
