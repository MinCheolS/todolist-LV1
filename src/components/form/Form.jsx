import React, { useState } from 'react'
import "./style.css"

let number = 3
function Form({todos, setTodos}) {
    const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    }
    
    const [todo, setTodo] = useState(initialState)

    const onChangeHandler = (event) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value})
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(todo.title.trim() === "" || todo.body.trim() === "") return;
        setTodos([...todos, {...todo, id: number}])
        setTodo(initialState)
        number++
    }
    
return (
    <form className='add-form' onSubmit={onSubmitHandler}>
        <div className='input-group'>
            <label className='form-label'>제목</label>
            <input 
            type='text'
            name='title'
            value={todo.title}
            onChange={onChangeHandler}
            className='add-input input-body'
            />
            <label className='form-label'>내용</label>
            <input 
            type='text'
            name='body'
            value={todo.body}
            onChange={onChangeHandler} 
            className='add-input'          
            />
        </div>
        <button className='add-button'>추가하기</button>
    </form>
  )
}

export default Form