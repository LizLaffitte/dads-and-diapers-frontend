import React, { Component } from 'react'
import ListingForm from '../components/listings/ListingForm'

class EditListingFormWrapper extends Component {
    render(){
        debugger
        return (<ListingForm listing={this.props.listing} header={"Edit "} />)    
    }
}

export default EditListingFormWrapper