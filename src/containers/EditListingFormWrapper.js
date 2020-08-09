import React, { Component } from 'react'
import ListingForm from '../components/listings/ListingForm'
import { connect } from 'react-redux'
import {updateListing} from '../actions/listingActions'

class EditListingFormWrapper extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.updateListing(this.props.listing)
    }

    render(){
        return (<ListingForm listing={this.props.listing} header={"Edit "} submit={this.handleOnSubmit} />)    
    }
}

export default connect(null, {updateListing})(EditListingFormWrapper)