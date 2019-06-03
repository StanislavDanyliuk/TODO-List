import { ADD_TASK, DELETE_TASK } from '../constants/constants'

const TASKS = [
    {
        id: 1,
        text: 'Text 1',
    },
    {
        id: 2,
        text: 'Text 2',
    },
    {
        id: 3,
        text: 'Text 3',
    },
    {
        id: 4,
        text: 'Text 4',
    },
    {
        id: 5,
        text: 'Text 5',
    },

];


const tasks = (state = TASKS, { id, text, type }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                }
            ];
        default:
            return state;

        case DELETE_TASK:
            return [...state].filter(task => task.id !== id);
    }
}
export default tasks