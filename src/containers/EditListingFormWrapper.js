import React, { Component } from 'react'
import ListingForm from '../components/listings/ListingForm'
import { connect } from 'react-redux'
import {updateListing} from '../actions/listingActions'
import { testListing } from '../actions/listingActions'

class EditListingFormWrapper extends Component {

    handleOnSubmit = (state) => {
        this.props.updateListing({name: state.name, address: state.address}, this.props.listing.id)
    }

    render(){
        return (<ListingForm listing={this.props.listing} header={"Edit "} submit={this.handleOnSubmit}  history={this.props.history} />)    
    }
}

export default connect(null, {updateListing})(EditListingFormWrapper)