import React, { Component } from 'react'

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.props.history.push('/listings')
    }
    render() {
        const {username, password} = this.state
        return(
            <form id="login-form" onSubmit={this.handleOnSubmit}>
                <h1>Login</h1>
                <label>Username: </label><br />
                <input type="text" value={username} onChange={this.handleOnChange} name="username" /><br /><br />
                <label>Password: </label> <br />
                <input type="password" value={password} name="password" onChange={this.handleOnChange} />
                <br /><br />
                <input type="submit" value="Log In"  />
            </form>
        )
    }
}
export default LoginForm