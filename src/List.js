import React from 'react';

const List = ({ todos }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span>
                        {todo.content}
                    </span>
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