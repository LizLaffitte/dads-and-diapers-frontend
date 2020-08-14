import React, {Component} from 'react'
import Listing from '../components/listings/Listing'
import Reviews from '../components/reviews/Reviews'
import Button from '../components/Button'

class ListingContainer extends Component {
    render() {
        const {listing} = this.props
        
        return(
        
            <div className="listingcard">
                <Listing listing={listing} key={listing.id} />
                <Button link={`/listings/${listing.id}/edit`} text="Edit"/>
                <Button link={`/listings/${listing.id}/reviews/new`} text="Add a Review"/>
                <Reviews reviews={listing.attributes.reviews} />
            </div>
        )
    }
    
}

export default ListingContainer