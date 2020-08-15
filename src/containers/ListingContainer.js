import React, {Component} from 'react'
import Listing from '../components/listings/Listing'
import Reviews from '../components/reviews/Reviews'
import Button from '../components/Button'
import {connect} from 'react-redux'

class ListingContainer extends Component {


    render() {
        const {listing, reviews, users} = this.props
        return(
        
            <div className="listingcard flex space-btwn">
                <div>
                    <Listing listing={listing} key={listing.id} />
                    <Button link={`/listings/${listing.id}/edit`} text="Edit"/>
                    <Button link={`/listings/${listing.id}/reviews/new`} text="Add a Review"/>
                </div>
                <Reviews listing={listing} reviews={reviews} users={users}  />
            </div>
        )
    }
    
}
const mapStateToProps = ({reviews, users}) => ({reviews, users})
export default connect(mapStateToProps)(ListingContainer)