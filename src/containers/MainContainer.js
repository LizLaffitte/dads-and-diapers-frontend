import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from '../components/userForms/LoginForm'
import SignupForm from '../components/userForms/SignupForm'
import {login, signup} from '../actions/userActions'
import {fetchListings, setCurrentListing} from '../actions/listingActions'
import {fetchReviews} from '../actions/reviewActions'
import Listings from '../components/listings/Listings'
import NewListingFormWrapper from '../containers/NewListingFormWrapper'
import EditListingFormWrapper from '../containers/EditListingFormWrapper'
import ListingContainer from '../containers/ListingContainer'



class MainContainer extends Component {
    componentDidMount(){
        this.props.fetchListings()
    }
    findListing = (id) => {
        let listing = this.props.listings.find(listing => listing.id == id)
        if(listing != this.props.currentListing) {
            this.props.setCurrentListing(listing)
            return listing
        } else {
            let listing = JSON.parse(localStorage.getItem('currentListing'))
            return listing
        }
    }    


    loggedIn = () =>{
        return this.props.currentUser
    }


    render(){
        return(
            <main>
                    <Switch>
                        <Route exact path='/login' >
                            {this.loggedIn() ? <Redirect to="/listings" /> : <LoginForm login={this.props.login}  />}
                        </Route>
                        <Route exact path='/signup' render={props => <SignupForm {...props} signup={this.props.signup} />} />
                        <Route exact path='/listings' render={props => <Listings {...props} listings={this.props.listings}/>} />
                        {/* <Route exact path='/listings/new' component={NewListingFormWrapper} />*/}

                        <Route exact path="/listings/:id/edit" render={props => {
                                const listing = this.findListing(props.match.params.id)
                        return <EditListingFormWrapper {...props} listing={listing} />}}/>
                        <Route exact path="/listings/:id" render={props => {
                             const listing = this.findListing(props.match.params.id)
                        return <ListingContainer {...props} listing={listing} />}}/>
                    </Switch>
            </main>
        )
    }
}
const mapStateToProps = ({currentUser, listings, currentListing}) => ({currentUser, listings, currentListing})
export default connect(mapStateToProps, {login, signup, fetchListings, setCurrentListing, fetchReviews})(MainContainer)