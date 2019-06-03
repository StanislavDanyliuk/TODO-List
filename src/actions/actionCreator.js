import { ADD_TASK, DELETE_TASK } from '../constants/constants'

export const addTask = (id, text) => ({
    type: ADD_TASK,
    id,
    text,
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
})
