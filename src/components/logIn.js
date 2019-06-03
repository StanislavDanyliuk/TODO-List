import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


export default class logIn extends Component {
    state = {
        user: '',
        pass: '',
        rememberMe: false,
        redirect: false,
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        const pass = rememberMe ? localStorage.getItem('pass') : '';
        this.setState({ user, rememberMe, pass });
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { user, rememberMe, pass } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
        localStorage.setItem('pass', rememberMe ? pass : '');
        console.log(this.state);

    };
    render() {
        return (
            <div className='container'>
                {this.renderRedirect()}
                <form />
                <label>
                    User: <input name="user" value={this.state.user} onChange={this.handleChange} />
                </label>
                <label>
                    Pass: <input name="pass" type='password' value={this.state.pass} onChange={this.handleChange} />
                </label>
                <label>
                    <input type="checkbox" name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} />
                    <span>Remember me</span>
                </label>
                <button className='waves-effect waves-light btn right' type="submit" onClick={() => { this.handleFormSubmit(); this.setRedirect() }}>Sign In</button>
            </div>
        )
    }
}
