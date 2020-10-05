import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Listing extends Component {
    renderRatings = () => {
        const {mens_chance, womens_chance, isolated_chance, clean_chance, working_chance} = this.props.listing.attributes
        // if(this.props.listing.attributes.any?(null)){
        //     return()
        // }
        return(
        <div className="rating-results">
            <h4>Ratings: </h4>
            <div>Men's: {mens_chance}/100</div>
            <div>Women's: {womens_chance}/100</div>
            <div>Private: {isolated_chance}/100</div>
        <div>Clean: {clean_chance}/100</div>
        <div>Working: {working_chance}/100</div>
        </div>
        )
    }

    render(){
        const {name, address} = this.props.listing.attributes
        const {id} = this.props.listing
        return(
            <div className="listing" >
               <h2> <Link to={`/listings/${id}`}>{name}</Link></h2>
                <p>{address}</p>
               {this.renderRatings}
            </div>
        )
    }
}

export default Listing