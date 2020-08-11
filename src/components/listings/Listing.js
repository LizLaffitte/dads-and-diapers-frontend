import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Listing extends Component {
    
    render(){
        const {name, address, mens_chance, womens_chance} = this.props.listing.attributes
        return(
            <div>
                <h3>{name}</h3>
                <p>{address}</p>
                <div className="rating-results">
                <div>{mens_chance}% Men's</div>
                <div>{womens_chance}% Women's</div>
                <Link to={`/listings/${this.props.listing.id}/edit`}>Edit</Link>
                </div>
            </div>
        )
    }
}

export default Listing