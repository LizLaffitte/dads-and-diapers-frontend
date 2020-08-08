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
                <label>Listing Name:</label><br />
                <input type="text" value={name} /><br /><br />

                <br />

                <br /><br />
                

            </form>
        )
    }

}

export default ListingInput