import React from 'react';
import PropTypes from 'prop-types';


const TodoForm = ({ value, onChange }) => (
    <div className="todo-form-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-form"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
        />
    </div>
);

TodoForm.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}

TodoForm.defaultProps = {
    onChange: () => { },
    value: '',
}

export default TodoForm;
