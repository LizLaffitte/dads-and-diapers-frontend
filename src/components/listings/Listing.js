import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Listing extends Component {
    
    render(){
        const {name, address, mens_chance, womens_chance} = this.props.listing.attributes
        const {id} = this.props.listing
        return(
            <div className="listing" >
                <Link to={`/listings/${id}`}><h2>{name}</h2></Link>
                <p>{address}</p>
                <div className="rating-results">
                <div>Men's: {mens_chance}</div>
                <div>Women's: {womens_chance}</div>
                </div>
            </div>
        )
    }
}

export default Listing