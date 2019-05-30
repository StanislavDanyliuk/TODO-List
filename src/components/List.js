import React from 'react';

const List = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span>
                        {todo.content}
                    </span>
                    <span onClick={() => { deleteTodo(todo.id) }}><i className="small material-icons right red-text delete-btn">delete</i></span>
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