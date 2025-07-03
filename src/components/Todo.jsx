import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoList from './TodoList'

const Todo = () => {

    const [toDoList, setToDoList] = useState([]);
    const inputRef = useRef();
    const add = ()=>{
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
            return alert('Entered an Empty Task');
        }
        const newTodo = {
            id: Date.now(),
            text:inputText,
            isComplete: false,
        }
        setToDoList((prev)=> [...prev, newTodo]);
        inputRef.current.value = '';
    };

    const deleteTodo = (id)=>{
        setToDoList((prevTodos)=>{
           return prevTodos.filter((todo)=> todo.id !== id )
        })
    };
    const toggle = (id)=>{
        setToDoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id == id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    };

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(toDoList))
    },[toDoList]);

  return (
    <div className=' bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt=""/>
            <h1 className='font-sans font-bold text-2xl'>TO-DO LIST</h1>
        </div>
        {/* Input Section */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className=' bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task...' />
            <button onClick={add} className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-sans font-medium'>Add Task</button>
        </div>
        {/* List Section */}
        {
            toDoList.map((item)=>{
                return <TodoList item={item} key={item.id} deleteTodo={deleteTodo} toggle={toggle} />
            })
        }
    </div>
  )
}

export default Todo