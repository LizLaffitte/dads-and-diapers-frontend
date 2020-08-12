import React from 'react'
import Listing from '../components/listings/Listing'
import Reviews from '../components/reviews/Reviews'

function ListingContainer(props){
    return(
        
        <div>
            {console.log(props.listing)}
            <h1>Listing Container</h1>
            {console.log("Listing Container Render")}
            <Listing listing={props.listing} key={props.listing.id} />
            <Reviews listing={props.listing} />
        </div>
    )
}

export default ListingContainer