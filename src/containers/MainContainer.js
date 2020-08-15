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
import NewReviewFormWrapper from './NewReviewFormWrapper'
import EditReviewFormContainer from './EditReviewFormContainer'


class MainContainer extends Component {
    componentDidMount(){
        this.props.fetchListings()
        this.props.fetchReviews()
    }
    findListing = (id) => {
        let listing = this.props.listings.find(listing => listing.id === id)
        if(listing !== this.props.currentListing) {
            this.props.setCurrentListing(listing)
            
            return listing
        } else {
            let listing = JSON.parse(localStorage.getItem('currentListing'))
            return listing
        }
    }    

    findReview = (id) => {
        let review = this.props.reviews.find(review => review.id === id)
        return review
        // if(review !== this.props.currentListing) {
        //     this.props.setCurrentListing(listing)
            
        //     return listing
        // }
        // else {
        //     let listing = JSON.parse(localStorage.getItem('currentListing'))
        //     return listing
        // }
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
                        <Route exact path='/listings/new' component={NewListingFormWrapper} />
                        <Route exact path="/listings/:id/edit" render={props => {
                                const listing = this.findListing(props.match.params.id)
                        return <EditListingFormWrapper {...props} listing={listing} />}}/>
                        <Route exact path="/listings/:id" render={props => {
                             const listing = this.findListing(props.match.params.id)
                        return <ListingContainer {...props} listing={listing} />}}/>
                        <Route exact path={'/listings/:id/reviews/new'} render={props => {
                            const listing = this.findListing(props.match.params.id)
                            return <NewReviewFormWrapper {...props} listing={listing}/>
                        }} />
                        <Route exact path={'/listings/:listingid/reviews/:id/edit'} render={props => {
                            const listing = this.findListing(props.match.params.listingid)
                            const review = this.findReview(props.match.params.id)
                            return <EditReviewFormContainer {...props} review={review} listing={listing}/>
                        }} />
                        <Route exact path="/listings/:id/reviews" render={props => <Redirect to={`/listings/${props.match.params.id}`} />} />
                    </Switch>
            </main>
        )
    }
}
const mapStateToProps = ({currentUser, listings, currentListing, reviews}) => ({currentUser, listings, currentListing, reviews})
export default connect(mapStateToProps, {login, signup, fetchListings, setCurrentListing, fetchReviews})(MainContainer)