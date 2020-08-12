import React, { PureComponent } from 'react'
import ListingForm from '../components/listings/ListingForm'
import { connect } from 'react-redux'
import {updateListing, setCurrentListing} from '../actions/listingActions'



class EditListingFormWrapper extends PureComponent {

    handleOnSubmit = (formData) => {
        this.props.updateListing({name: formData.name, address: formData.address},this.props.currentOptions.currentListing.id)
    }
    render(){
        return (<ListingForm  listing={this.props.currentOptions.currentListing} header={"Edit "} submit={this.handleOnSubmit}  history={this.props.history} />)    
    }
}
const mapStateToProps = ({currentOptions, listings}) => ({currentOptions, listings})
export default connect(mapStateToProps, {updateListing, setCurrentListing})(EditListingFormWrapper)