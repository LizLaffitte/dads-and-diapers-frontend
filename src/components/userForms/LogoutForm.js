import React, { Component } from 'react'

class LogoutForm extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.logout()
        this.props.history.push("/login")
    }
    render() {
        return(
            <div className="flex space-btwn">
                {`Hello ${this.props.user.attributes.username}`}
                <form id="logout-form" onSubmit={this.handleOnSubmit}>
                    <input type="submit" value="Log Out"  />
                </form>

            </div>
            
        )
    }
}
export default LogoutForm