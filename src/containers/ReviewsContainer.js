import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NewReviewFormWrapper from './NewReviewFormWrapper'
import EditReviewFormContainer from './EditReviewFormContainer'
import Reviews from '../components/reviews/Reviews'
import {setCurrentReview, destroyReview} from '../actions/reviewActions'
import DeleteConfirmation from '../components/DeleteMessage'


class ReviewsContainer extends Component {

    findReview = (id) => {
        let review = this.props.reviews.find(review => review.id === id)
        if(review && review !== this.props.currentReview){
            this.props.setCurrentReview(review)
            return review
        } else {
            let review = JSON.parse(localStorage.getItem('currentReview'))
            return review
        }        
    } 

    render(){
        const { listing, reviews } = this.props
        return (
        <div className="ReviewsContainer">
        <Switch>
            <  Route exact path={'/listings/:id'} render={props => {
                return <Reviews {...props} listing={listing} reviews={reviews}  />
            }} />
            <Route exact path={'/listings/:id/reviews/new'} render={props => {
                return <NewReviewFormWrapper {...props} listing={listing}/>
            }} />
            <Route exact path={'/listings/:listingid/reviews/:id/edit'} render={props => {
                 const review = this.findReview(props.match.params.id)
                 return <EditReviewFormContainer {...props} review={review} listing={listing}/>
            }} />
            <Route exact path={'/listings/:listingid/reviews/:id/delete'} render={props => {
                const review = this.findReview(props.match.params.id)
                return <DeleteConfirmation {...props} submit={this.props.destroyReview}  review={review} listing={this.props.listing}/>
            }} />
        </Switch> 

        </div>
        )
    }
}

const mapStateToProps = ({reviews, currentReview}) => ({reviews, currentReview})
export default connect(mapStateToProps, {setCurrentReview, destroyReview})(ReviewsContainer)