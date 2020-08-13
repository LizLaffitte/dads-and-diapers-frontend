import React, { Component } from 'react'


class Review extends Component {
    
    render(){
        return(
            <div className="review">
                Review
                {console.log(this.props.review)}
            </div>
        )
    }
}

export default Review