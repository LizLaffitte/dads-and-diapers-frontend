import React, { Component } from 'react'

class ListingInput extends Component {
    state = {
        name: '',
        address: ''
    }
    
    render(){
        const {name, address} = this.state
        return (
            <form>
                <h2>Add a New Listing</h2>
                <label>Name:</label><br />
                <input type="text" value={name} /><br /><br />
                <label>Address:</label>
                <br />
                <input type="text" valut={address} />
                <br /><br />
                <input type="submit" />
            </form>
        )
    }

}

export default ListingInput