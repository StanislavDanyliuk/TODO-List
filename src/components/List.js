import React from 'react';

const List = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span>
                        {todo.content}
                    </span>
                    <span className='right' onClick={() => { deleteTodo(todo.id) }}>X</span>
                </div>
            )
        })
    ) : (
            <p className='center'>Nothing to show</p>
        )
    return (
        <div className='todos collection'>
            {todoList}
        </div>
    )
}

export default List;