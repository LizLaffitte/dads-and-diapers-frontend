import React, { PureComponent } from 'react'
import ListingForm from '../components/listings/ListingForm'
import { connect } from 'react-redux'
import {updateListing} from '../actions/listingActions'



class EditListingFormWrapper extends PureComponent {
    handleOnSubmit = (formData) => {
        this.props.updateListing({name: formData.name, address: formData.address},this.props.currentListing.id)
    }
    render(){
        const {listing} = this.props
        return (<ListingForm  listing={listing} header={"Edit "} submit={this.handleOnSubmit}  history={this.props.history} redirect={`/listings/${listing.id}`} />)    
    }
}
const mapStateToProps = ({currentListing, listings}) => ({currentListing, listings})
export default connect(mapStateToProps, {updateListing})(EditListingFormWrapper)