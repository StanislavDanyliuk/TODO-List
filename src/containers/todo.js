import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addTask, deleteTask } from '../actions/actionCreator'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Header from '../components/Header';


class Todo extends Component {

    state = {
        activeFilter: 'all',
        taskText: '',
    }


    handleInputChange = ({ target: { value } }) => {
        this.setState({
            taskText: value,
        })
    }

    addTask = ({ key }) => {
        const { taskText } = this.state;

        if (taskText.length > 3 && key === 'Enter') {
            const { addTask } = this.props;


            addTask((new Date()).getTime(), taskText, false);

            this.setState({
                taskText: '',
            })
        }
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks, deleteTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="todo-wrapper container">
                <Header />
                {isTasksExist && <TodoList tasksList={tasks} deleteTask={deleteTask} />}
                <TodoForm onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
                {/* {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />} */}
                <Footer />
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks
}), { addTask, deleteTask })(Todo);
