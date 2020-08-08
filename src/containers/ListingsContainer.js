import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings, createListing, updateListing} from '../actions/listingActions'
import ListingInput from '../components/listings/ListingInput'
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
                        <Route path="/listings/new" render={(props) => <ListingInput {...props} listingSubmit={this.props.createListing} name={""} address={""} />}  />
                        <Route path="/listings/:id/edit" render={(props) => <ListingInput {...props} listingSubmit={this.props.updateListing} name={""} address={""} />}  />
                        <Route path="/listings" render={(props) => <Listings {...props} listings={this.props.listings}/>} />
                        
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
