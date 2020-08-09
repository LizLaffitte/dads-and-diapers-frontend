import React, { Component } from 'react'
import ListingForm from '../components/listings/ListingForm'
import { connect } from 'react-redux'
import createListing from '../actions/listingActions'

class NewListingFormWrapper extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        const listing = {name: this.state.name, address: this.state.address}
        this.props.createListing(listing)
        window.history(pushState(newState, "Listings", "listings"))
    }

    render(){
        const listing = {address: "", name:"", id:""}
        return (
            <ListingForm listing={listing} header={"Add a New "} submit={this.handleOnSubmit} />
        )
    }
    
}



export default connect(null, createListing)(NewListingFormWrapper)