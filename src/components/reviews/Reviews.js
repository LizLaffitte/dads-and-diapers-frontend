import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
    
    renderReviews = () => {
        return this.props.reviews.map(review => {
            return (<Review key={review.id} review={review} />)
        })
        
    }
    render()  {
        return (
            <div className="reviews"> 
             <h3>Reviews:</h3>          
            {this.renderReviews()}
            
        </div>
        )
        
    }
}

export default Reviews