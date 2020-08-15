import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../components/reviews/ReviewForm'
import {updateReview, fetchReviews} from '../actions/reviewActions'


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
    componentWillUnmount(){
        this.props.fetchReviews()
    }
}
const mapStateToProps = ({listings}) => ({listings})
export default connect(mapStateToProps, {updateReview, fetchReviews})(EditReviewFormContainer)