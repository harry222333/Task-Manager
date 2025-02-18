import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"

const TaskList = ({text ,id , isComplete , deleteTodo , toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
      <img src={ isComplete ? tick : not_tick} alt="" className='w-7'/>
    <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
    ${isComplete ? "line-through" : "" }`}>{text}</p>
      </div>

      <MdDelete size={15} className='cursor-pointer' onClick={()=>{deleteTodo(id)}}/>
  </div>
  )
}

export default TaskList