import React, { Component } from 'react'
import {connect} from 'react-redux'
// import Result from './Result'


class SearchResults extends Component {

    // renderListings = (results) => {
    //         return results.map(result => {
    //                 return (<Result key={review.id} review={review}  listing={this.props.listing} />)
    //         })
    // }
        
    render()  {
        // const associatedReviews = this.props.reviews.filter(review => review.attributes.listing_id == this.props.listing.id)
        return (
            <ul className="search-results"> 

             {        
           /* {this.renderReviews(associatedReviews)} */}
            
        </ul>
        )
        
    }
}
const mapStateToProps = ({currentUser}) => ({currentUser})
export default connect(mapStateToProps)(SearchResults)