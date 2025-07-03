import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
function TodoList({item,deleteTodo,toggle}) {
    const {text,id,isComplete}= item;
  return (
    <div className='flex items-center my-3 gap-2 bg-orange-100 px-3 py-2 rounded-2xl'>
        <div 
        onClick={()=>{toggle(id)}}
        className='flex flex-1 items-center cursor-pointer'>
            <img className='w-6  mr-1.5' src={isComplete ?tick : not_tick} alt="" />
            <p className={` text-slate-700 font-mono font-medium text-xl 
                ${isComplete ? 'line-through' : ''}`}>{text}</p>
        </div>
        <img  className='w-3.5 cursor-pointer'
        onClick={()=>{deleteTodo(id)}}
         src={delete_icon} alt="" />
    </div>
  )
}

export default TodoList