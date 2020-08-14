import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../components/reviews/ReviewForm'
import Listing from '../components/listings/Listing'
import { createReview } from '../actions/reviewActions'

class NewReviewFormWrapper extends Component {

    handleOnSubmit = (state) => {
        if(this.props.currentUser){
            this.props.createReview(
                {listing_id: this.props.listing.id, mens: state.mens, womens: state.womens, clean: state.clean, private: state.private, broken: state.broken, user_id: this.props.currentUser.id
                })
        } else {
            alert("You must be logged in to add a review.")
            return false
        }        
    }

    render(){
        const {listing} = this.props
        return (
            <div className="flex space-btwn">
                    <Listing listing={listing} />
                    <ReviewForm listing={listing} header={"Review"} submit={this.handleOnSubmit} history={this.props.history} redirect={`/listings/${listing.id}`} />
            </div>
        )
    }
    
}

const mapStateToProps = ({currentUser}) => ({currentUser})

export default connect(mapStateToProps, {createReview})(NewReviewFormWrapper)