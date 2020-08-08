import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings, addListing} from '../actions/listingActions'
import ListingInput from '../components/listings/ListingInput'

class ListingsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchListings()
      }

    render(){
        const {listings, addListing} = this.props
        return (
            <div>
                <h1>Listings Container</h1>
                <Listings listings={listings} />
                <ListingInput addListing={addListing} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings()),
      addListing: () => dispatch(addListing())
    }
}

const mapStateToProps = ({listings}) => ({listings})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
