import React from 'react';
import PropTypes from 'prop-types';
import '../main.scss'

const TodoItem = ({ text, isCompleted, deleteTask, id }) => (
    <li className="todo-item collection-item">
        {/* <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} /> */}
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <i className="material-icons right red-text delete-btn" onClick={() => deleteTask(id)}>delete</i>
    </li>
);

TodoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    deleteTask: PropTypes.func,
    id: PropTypes.number,

}

TodoItem.defaultProps = {
    id: 0,
    text: '',
    isCompleted: false,
    deleteTask: () => { }
}

export default TodoItem;
