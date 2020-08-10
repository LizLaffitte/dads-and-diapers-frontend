import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import LogoutForm from '../components/LogoutForm'
import Navbar from '../components/Navbar'
import {login, getCurrentUser, logout} from '../actions/userActions'

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getCurrentUser()
      }

    buttonRender = () => {
        return (
          this.props.currentUser ? <LogoutForm logout={this.props.logout} user={this.props.currentUser} /> : <LoginForm login={this.props.login} />
        )
      }

    render(){
        return(
            <header>
                <div>Dads & Diapers</div>
                <Navbar />
                <div className="log-btns">{this.buttonRender()}</div>
            </header>
        )
    }
}

const mapStateToProps = ({currentUser}) => ({currentUser})

export default connect(mapStateToProps, {login, getCurrentUser, logout})(HeaderContainer)