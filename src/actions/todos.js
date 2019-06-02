import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";



export const addTodo = (content) => ({
    type: ADD_TODO,
    content
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

