import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings, createListing, updateListing} from '../actions/listingActions'
import ListingForm from '../components/listings/ListingForm'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class ListingsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchListings()
      }

    render(){        
        return (
            <div>
                <h1>Listings:</h1>  
                <Router>
                    <div>
                        <Route path="/listings/new" render={(props) => <ListingForm {...props} listingSubmit={this.props.createListing} listing={false} />}  />
                        <Route path="/listings/:id/edit" exact render={(props) => {
                            const listing = this.props.listings.find(listing => listing.id == props.match.params.id) 
                            console.log(listing)                           
                            return <ListingForm {...props} listingSubmit={this.props.updateListing} listing={listing} />}}  />
                        <Route path="/listings" exact render={(props) => <Listings {...props} listings={this.props.listings}/>} />
                        
                    </div>
                </Router>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings()),
      createListing: (listing) => dispatch(createListing(listing)),
      updateListing: (listing) => dispatch(updateListing(listing))
    }
}

const mapStateToProps = ({listings}) => ({listings})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
