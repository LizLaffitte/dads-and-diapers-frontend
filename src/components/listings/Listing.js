import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Listing extends Component {
    
    render(){
        const {name, address, mens_chance, womens_chance, isolated_chance, clean_chance, working_chance} = this.props.listing.attributes
        const {id} = this.props.listing
        return(
            <div className="listing" >
                <Link to={`/listings/${id}`}><h2>{name}</h2></Link>
                <p>{address}</p>
                <div className="rating-results">
                    <h4>Ratings: </h4>
                <div>Men's: {mens_chance}/100</div>
                <div>Women's: {womens_chance}/100</div>
                <div>Private: {isolated_chance}/100</div>
                <div>Clean: {clean_chance}/100</div>
                <div>Working: {working_chance}/100</div>
                </div>
            </div>
        )
    }
}

export default Listing