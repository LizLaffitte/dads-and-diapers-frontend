import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import LogoutForm from '../components/userForms/LogoutForm'
import Navbar from '../components/Navbar'
import {getCurrentUser, logout} from '../actions/userActions'
import {fetchListings, setCurrentListing} from '../actions/listingActions'
import {fetchReviews} from '../actions/reviewActions'
import {fetchUsers} from '../actions/userActions'

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getCurrentUser()
        this.props.fetchListings()
        this.props.fetchReviews()
        this.props.setCurrentListing(JSON.parse(localStorage.getItem('currentListing')))
        this.props.fetchUsers()
    }

    buttonRender = () => {
        return (
          this.props.currentUser ? <LogoutForm history={this.props.history} logout={this.props.logout} user={this.props.currentUser} /> : <div><NavLink to="/login">Login</NavLink> | <NavLink to="/signup">Signup</NavLink></div>
        )
      }

    render(){
        return(
            <header>
                <div><a href="/">Dads & Diapers</a></div>
                <Navbar />
                <div className="log-btns">{this.buttonRender()}</div>
            </header>
        )
    }
}

const mapStateToProps = ({currentUser}) => ({currentUser})

export default withRouter(connect(mapStateToProps, {getCurrentUser, logout, fetchListings, setCurrentListing, fetchReviews, fetchUsers})(HeaderContainer))