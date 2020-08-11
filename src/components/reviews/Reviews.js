import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
    
    renderReviews = () => {
        return this.props.listing.attributes.reviews.map(review => {
            return (<Review key={review.id} review={review} />)
        })
        
    }
    render()  {
        return (
            <div>
             <h1>Reviews:</h1>          
            {this.renderReviews()}
            {console.log(this.props)}
        </div>
        )
        
    }
}

export default Reviews