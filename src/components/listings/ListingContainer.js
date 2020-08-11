import React from 'react'
import Listing from './Listing'
import Reviews from '../reviews/Reviews'

function ListingContainer(props){
    return(
        <div>
            <Listing listing={props.listing} key={props.listing.id} />
            <Reviews listing={props.listing} />
        </div>
    )
}

export default ListingContainer