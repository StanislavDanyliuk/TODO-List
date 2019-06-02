import { ADD_TASK, DELETE_TASK } from '../constants/constants'

const TASKS = [
    {
        id: 1,
        text: 'Text 1',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Text 2',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Text 3',
        isCompleted: false,
    },
    {
        id: 4,
        text: 'Text 4',
        isCompleted: false,
    },
    {
        id: 5,
        text: 'Text 5',
        isCompleted: false,
    },

];


const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted
                }
            ];
        default:
            return state;

        case DELETE_TASK:
            return [...state].filter(task => task.id !== id);
    }
}
export default tasks