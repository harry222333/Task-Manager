import React from 'react';
import { MdDelete } from "react-icons/md";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";

const TaskList = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between my-3 gap-3 p-3 bg-gray-100 rounded-lg w-full">
      {/* ✅ Left Side: Checkbox + Wrapping Text */}
      <div
        onClick={() => toggle(id)}
        className="flex items-start gap-3 flex-1 cursor-pointer"
      >
        <img
          src={isComplete ? tick : not_tick}
          alt=""
          className="w-6 h-6 mt-1 flex-shrink-0"
        />

        <p
          className={`text-slate-700 text-[16px] leading-snug break-words w-full 
          ${isComplete ? "line-through decoration-slate-400" : ""}`}
          style={{ wordBreak: "break-word" }} // Forces long words to wrap
        >
          {text}
        </p>
      </div>

      {/* ✅ Right Side: Delete Button */}
      <MdDelete
        size={20}
        className="cursor-pointer text-red-500 flex-shrink-0"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default TaskList;
