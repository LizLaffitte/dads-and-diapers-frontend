import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings, createListing} from '../actions/listingActions'
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
                <ListingInput createListing={createListing} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings()),
      createListing: () => dispatch(createListing())
    }
}

const mapStateToProps = ({listings}) => ({listings})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
