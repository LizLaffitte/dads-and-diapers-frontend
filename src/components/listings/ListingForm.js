import React, { Component } from 'react'

class ListingForm extends Component {
    state = {
        name: this.props.listing.name,
        address: this.props.listing.address
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const listing = {name: this.state.name, address: this.state.address}
        this.props.listingSubmit(listing)
        // this.setState({name: '', address: ''})
    }

    render(){
        const {name, address} = this.state
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h2>{this.props.header} Listing</h2>
                <label>Name:</label><br />
                <input type="text" onChange={this.handleOnChange} name="name" value={name} /><br /><br />
                <label>Address:</label>
                <br />
                <input type="text" onChange={this.handleOnChange} name="address" value={address} />
                <br /><br />
                <input  type="submit" />
            </form>
        )
    }

}

export default ListingForm