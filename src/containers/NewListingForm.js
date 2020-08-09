import React, { Component } from 'react'
import ListingForm from '../components/listings/ListingForm'

class NewListingForm extends Component {
    render(){
        const listing = {address: "", name:"", id:""}
        return (
            <ListingForm listing={listing} header={"Add a New "} />
        )
    }
    
}

export default NewListingForm