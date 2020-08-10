import React, { Component } from 'react'

class SignupForm extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
        this.props.history.push('/listings')
    }
    render() {
        const {username, email, password} = this.state
        return(
            <form id="signup-form" onSubmit={this.handleOnSubmit}>
                <h1>Sign Up</h1>
                <label>Username: </label><br />
                <input type="text" value={username} onChange={this.handleOnChange} name="username" /><br /><br />
                <label>Email Address: </label><br />
                <input type="email" value={email} onChange={this.handleOnChange} name="email" /><br /><br />
                <label>Password: </label> <br />
                <input type="password" value={password} name="password" onChange={this.handleOnChange} />
                <br /><br />
                <input type="submit" value="Sign up"  />
            </form>
        )
    }
}
export default SignupForm