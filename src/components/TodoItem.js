import React from 'react';
import PropTypes from 'prop-types';
import '../main.scss'

const TodoItem = ({ text, deleteTask, id }) => (
    <li className="todo-item collection-item">
        <span>{text}</span>
        <i className="material-icons right red-text delete-btn" onClick={() => deleteTask(id)}>delete</i>
    </li>
);

TodoItem.propTypes = {
    text: PropTypes.string,
    deleteTask: PropTypes.func,
    id: PropTypes.number,

}

TodoItem.defaultProps = {
    id: 0,
    text: '',
    deleteTask: () => { }
}

export default TodoItem;
