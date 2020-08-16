import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {fetchListings, setCurrentListing, clearCurrentListing} from '../actions/listingActions'
import {fetchReviews} from '../actions/reviewActions'
import ListingCard from './ListingCard'
import Listings from '../components/listings/Listings'
import NewListingFormWrapper from '../containers/NewListingFormWrapper'
import EditListingFormWrapper from '../containers/EditListingFormWrapper'



class ListingsContainer extends Component {
    componentDidMount(){
        this.props.fetchListings()
        this.props.fetchReviews()
    }
    findListing = (id) => {
        let listing = this.props.listings.find(listing => listing.id === id)
        if(listing) {
            if(listing != this.props.currentListing){
                console.log("Listing:", listing)
                console.log(this.props.currentListing)
                this.props.setCurrentListing(listing)
            }
            return listing
        } else {
            let listing = JSON.parse(localStorage.getItem('currentListing'))
            return listing
        }
    }   
    render(){
        const {listings} = this.props
        return(
            <div className="ListingsContainer">
                <Switch>
                    <Route exact path='/listings/new' component={NewListingFormWrapper} />
                    <Route exact path="/listings/:id/edit" render={props => {
                             const listing = this.findListing(props.match.params.id)
                        return <EditListingFormWrapper {...props} listing={listing} />}
                    }/>
                    <Route path="/listings/:id" render={props => {
                             const listing = this.findListing(props.match.params.id)
                        return <ListingCard {...props} listing={listing} />}
                    }/>
                    <Route exact path='/listings' render={props => {
                        this.props.clearCurrentListing()
                        return <Listings {...props} listings={listings} /> }
                    }/>
                </Switch>
                            
            </div>
        )
    }
    
}
const mapStateToProps = ({listings}) => ({listings})
export default connect(mapStateToProps, {fetchListings, fetchReviews, setCurrentListing, clearCurrentListing})(ListingsContainer)