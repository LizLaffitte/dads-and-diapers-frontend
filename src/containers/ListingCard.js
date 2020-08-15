import React, {Component} from 'react'
import Listing from '../components/listings/Listing'
import ReviewsContainer from '../containers/ReviewsContainer'
import Reviews from '../components/reviews/Reviews'
import Button from '../components/Button'
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'

class ListingCard extends Component {


    render() {
        const {listing} = this.props
        return(
            <div className="listingcard flex space-btwn">
                <div>
                    <Listing listing={listing} key={listing.id} />
                    <Route exact path="/listings/:id">
                        <Button link={`/listings/${listing.id}/edit`} text="Edit"/>
                        <Button link={`/listings/${listing.id}/reviews/new`} text="Add a Review"/>
                    </Route>
                    
                </div>
                <ReviewsContainer listing={listing} />
            </div>
        )
    }
    
}
const mapStateToProps = ({reviews, users}) => ({reviews, users})
export default connect(mapStateToProps)(ListingCard)