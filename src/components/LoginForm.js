import React from 'react'
import { connect } from 'react-redux'
const LoginForm = ({username, password}) => {
    return(
        <form onSubmit={undefined}>
            <label>Username:</label><br />
            <input type="text" value={username} onChange={undefined} name="username" />
            <br /><br />
            <label>Password:</label><br />
            <input type="password" value={password} name="password" onChange={undefined} />
            <br /><br />
            <input type="submit" value="Log In"  />
        </form>
    )
}
const mapStateToProps = state => {
    return {
        username: state.loginForm.user,
        password: state.loginForm.password
    }
}
export default connect(mapStateToProps, )(LoginForm)