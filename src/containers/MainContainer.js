import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from '../components/userForms/LoginForm'
import SignupForm from '../components/userForms/SignupForm'
import {login, signup} from '../actions/userActions'
import {fetchListings} from '../actions/listingActions'
import {fetchReviews} from '../actions/reviewActions'
import ListingsContainer from '../containers/ListingsContainer'
import Search from '../components/Search'


class MainContainer extends Component {
    loggedIn = () =>{
        return this.props.currentUser
    }


    render(){
        const {login, signup, listings} = this.props
        return(
            <main>
                    <Switch>
                        <Route exact path='/login' >
                            {this.loggedIn() ? <Redirect to="/listings" /> : <LoginForm login={login}  />}
                        </Route>
                        <Route exact path='/' render={props => <Search {...props} collection={listings} /> }/>
                        <Route exact path='/signup' render={props => <SignupForm {...props} signup={signup} />} />
                        <Route path='/listings' render={props => <ListingsContainer {...props} listings={listings}/>} />
                        <Route exact path="/listings/:id/reviews" render={props => <Redirect to={`/listings/${props.match.params.id}`} />} />
                    </Switch>
            </main>
        )
    }
}
const mapStateToProps = ({currentUser, listings, currentListing, reviews}) => ({currentUser, listings, currentListing, reviews})
export default connect(mapStateToProps, {login, signup, fetchListings, fetchReviews})(MainContainer)