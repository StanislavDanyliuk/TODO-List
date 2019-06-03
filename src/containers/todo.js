import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addTask, deleteTask } from '../actions/actionCreator'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Header from '../components/Header';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: '',
            todos: [],
            userId: 1
        }
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


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                let todos = data.map(todo => {

                    if (todo.userId === this.state.userId) {
                        return (
                            <div key={todo.userId}>
                                <p>{todo.title}</p>
                                <p>{todo.body}</p>
                            </div>
                        )
                    }
                })
                this.setState({
                    todo: todos
                })
            })
    }


    render() {
        const { taskText } = this.state;
        const { tasks, deleteTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="todo-wrapper container">
                <Header />
                {isTasksExist && <TodoList tasksList={tasks} deleteTask={deleteTask} />}
                {!isTasksExist && <span>Nothing to show :(</span>}
                <TodoForm onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />

                <div className="post">
                    {this.state.todo}
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks
}), { addTask, deleteTask })(Todo);
