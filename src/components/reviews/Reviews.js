import React, { Component } from 'react'
import {connect} from 'react-redux'
import Review from './Review'


class Reviews extends Component {

    renderReviews = (reviews) => {
            return reviews.map(review => {
                    return (<Review key={review.id} review={review} user={review.attributes.user} currentUser={this.props.currentUser} listing={this.props.listing} />)
            })
    }
        
    render()  {
        const associatedReviews = this.props.reviews.filter(review => review.attributes.listing_id == this.props.listing.id)
        return (
            <div className="reviews"> 
             <h3>Reviews:</h3>          
            {this.renderReviews(associatedReviews)}
            
        </div>
        )
        
    }
}
const mapStateToProps = ({currentUser}) => ({currentUser})
export default connect(mapStateToProps)(Reviews)