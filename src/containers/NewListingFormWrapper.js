import React, { Component } from 'react'
import ListingForm from '../components/listings/ListingForm'
import { connect } from 'react-redux'
import { createListing } from '../actions/listingActions'

class NewListingFormWrapper extends Component {

    handleOnSubmit = (state) => {
        this.props.createListing({name: state.name, address: state.address})
    }

    render(){
        const listing = {address: "", name:"", id:""}
        return (
            <ListingForm listing={listing} header={"Add a New "} submit={this.handleOnSubmit} history={this.props.history} />
        )
    }
    
}



export default connect(null, {createListing})(NewListingFormWrapper)