import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings, createListing} from '../actions/listingActions'
import ListingInput from '../components/listings/ListingInput'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class ListingsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchListings()
      }

    render(){
        const {listings} = this.props
        
        return (
            <div>
                <h1>Listings:</h1>  
                <Router>
                    <div>
                        <Route path="/listings/new" render={(props) => <ListingInput {...props} listingSubmit={this.props.createListing} name={""} address={""} />}  />
                    </div>
                </Router>
                <Listings listings={listings} />
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings()),
      createListing: (listing) => dispatch(createListing(listing))
    }
}

const mapStateToProps = ({listings}) => ({listings})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
