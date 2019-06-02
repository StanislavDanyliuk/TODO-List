import React, { Component } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Header from '../components/Header';


const TASKS = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        isCompleted: false,
    }
];

class ToDo extends Component {

    state = {
        activeFilter: 'all',
    }

    render() {
        const { activeFilter } = this.state;
        const tasksList = TASKS;
        const isTasksExist = tasksList && tasksList.length > 0;

        return (
            <div className="todo-wrapper container">
                <Header />
                {isTasksExist && <TodoList tasksList={tasksList} />}
                <TodoForm />
                {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

export default ToDo;
