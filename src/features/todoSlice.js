import { createSlice } from '@reduxjs/toolkit'

let todoId = 0; 

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // Add a todo with a unique id
            state.items.push({ id: todoId++, text: action.payload });
        },
        removeOne: (state, action) => {
            // Remove a todo by id
            const index = state.items.findIndex(todo => todo.id === action.payload);
            if(index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearTodo: (state) => {
            state.items = [];
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer
