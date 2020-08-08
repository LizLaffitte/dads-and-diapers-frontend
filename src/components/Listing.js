import React, { Component } from 'react'

class Listing extends Component {
    
    render(){
        const {name} = this.props.listing
        return(
            <div>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default Listing