import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ text, isCompleted }) => (
    <li className="todo-item collection">
        <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <i class="material-icons right">delete</i>
    </li>
);

TodoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
}

TodoItem.defaultProps = {
    text: '',
    isCompleted: false,
}

export default TodoItem;
