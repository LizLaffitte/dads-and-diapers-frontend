import React, { Component } from "react"
import Button from './Button'
import Review from '../components/reviews/Review'
import {connect} from 'react-redux'
import {fetchReviews} from '../actions/reviewActions'


class DeleteConfirmation extends Component {
    handleDeleteClick = () => {
        this.props.submit(this.props.review.id)
        this.props.fetchReviews()
        this.props.history.push(`/listings/${this.props.listing.id}`)

    }
    render(){
        const {review, listing} = this.props
        return(
            <>
                <p>{`Are you sure you want to delete your review of ${listing.attributes.name}?`}</p>
                <div><Button link={`/listings/${this.props.listing.id}`} text="Go Back" />  | <button onClick={this.handleDeleteClick} >Delete</button>
                </div>
            </>
        )
    }

    
}

export default connect(null, {fetchReviews})(DeleteConfirmation)