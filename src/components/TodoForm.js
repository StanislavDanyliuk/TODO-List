import React from 'react';
import PropTypes from 'prop-types';


const TodoForm = ({ value, onChange, onKeyPress }) => (
    <div className="todo-form-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-form"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>
);

TodoForm.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

TodoForm.defaultProps = {
    onChange: () => { },
    onKeyPress: () => { },
    value: '',
}

export default TodoForm;
