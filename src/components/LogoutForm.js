import React, { Component } from 'react'

class LogoutForm extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.logout()
    }
    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <input type="submit" value="Log Out"  />
            </form>
        )
    }
}
export default LogoutForm