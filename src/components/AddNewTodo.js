import React, { useState } from 'react'

const AddNewTodo = ({addTodo}) => {
    const [todo, setTodo]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo) 
        setTodo('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'> To do</label>
                <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
                <input type='submit'/>
        </form>
    );
}

export default  AddNewTodo;