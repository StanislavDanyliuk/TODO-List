import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


const TodoList = ({ tasksList }) => (
    <ul className="todo-list collection">
        {tasksList.map(({ id, text, isCompleted }) => (
            <TodoItem key={id} text={text} isCompleted={isCompleted} className='collection-item'/>
        ))}
    </ul>
);

TodoList.propTypes = {
    tasksList: PropTypes.array,
}

TodoList.defaultProps = {
    tasksList: [],
}

export default TodoList;
