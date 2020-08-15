import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../components/reviews/ReviewForm'
import Listing from '../components/listings/Listing'
import {updateReview} from '../actions/reviewActions'


class EditReviewFormContainer extends PureComponent {
    handleOnSubmit = (formData) => {
        this.props.updateReview(formData,this.props.review.id)
    }
    render(){
        const {listing, review, history} = this.props
        return (
            <div className="flex space-btwn">
                    <ReviewForm listing={listing} review={review} header={"Review"} submit={this.handleOnSubmit} history={history} redirect={`/listings/${listing.id}`}  />
            </div>
        )
    }
}
const mapStateToProps = ({listings}) => ({listings})
export default connect(mapStateToProps, {updateReview})(EditReviewFormContainer)