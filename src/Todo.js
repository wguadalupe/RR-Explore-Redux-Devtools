import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodo } from './features/todoSlice'

function Todo() {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    // Adjust to handle todo object structure
    const renderItems = items.map((todo) => (
        <li key={todo.id} onClick={() => dispatch(removeOne(todo.id))}>
            {todo.text}
        </li>
    ));

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput(''); // Clear input after submission
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    );
}

export default Todo;
