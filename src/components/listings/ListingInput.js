import React, { Component } from 'react'

class ListingInput extends Component {
    state = {
        name: '',
        address: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const listing = {name: this.state.name}
        this.props.addListing(listing)
    }

    render(){
        const {name, address} = this.state
        return (
            <form>
                <h2>Add a New Listing</h2>
                <label>Name:</label><br />
                <input type="text" onChange={this.handleOnChange} name="name" value={name} /><br /><br />
                <label>Address:</label>
                <br />
                <input type="text" onChange={this.handleOnChange} name="address" value={address} />
                <br /><br />
                <input onSubmit={this.handleOnSubmit} type="submit" />
            </form>
        )
    }

}

export default ListingInput