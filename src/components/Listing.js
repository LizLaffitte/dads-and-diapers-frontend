import React, { Component } from 'react'

class Listing extends Component {
    
    render(){
        const {name, address, mens_chance, womens_chance} = this.props.listing
        return(
            <div>
                <h3>{name}</h3>
                <p>{address}</p>
                <div className="rating-results">
                <div>{mens_chance}% Men's</div>
                <div>{womens_chance}% Women's</div>
                </div>
            </div>
        )
    }
}

export default Listing