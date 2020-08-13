import React, {Component} from 'react'

import Listing from '../components/listings/Listing'
import Reviews from '../components/reviews/Reviews'

class ListingContainer extends Component {
    render() {
        const {listing} = this.props
        
        return(
        
            <div class="listingcard">
                <Listing listing={listing} key={listing.id} />
                <Reviews reviews={listing.attributes.reviews} />
            </div>
        )
    }
    
}

export default ListingContainer