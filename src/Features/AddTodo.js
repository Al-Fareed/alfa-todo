import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/todoSlice';
import './AddTodod.css'
const AddTodo = () => {
    const dispatch = useDispatch()
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        // eslint-disable-next-line no-lone-blocks
        {text && dispatch(addTodo(text))}
        console.log(text)
        setText('')
    }
    const [text,setText] = useState('');
  return (
    <form onSubmit={handleFormSubmit} className='todo-form' >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default AddTodo
