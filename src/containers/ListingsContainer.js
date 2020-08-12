import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchListings} from '../actions/listingActions'
// import ListingContainer from './ListingContainer'
import Listings from '../components/listings/Listings'
// import Reviews from '../components/reviews/Reviews'


class ListingsContainer extends Component {
    // componentDidMount(){
    //     this.props.fetchListings()
    // }
    // findListing = (id) => {
    //     let listing = this.props.listings.find(listing => listing.id == id)
    //     if(listing) {
    //         this.props.setCurrentListing(listing)
    //         return listing
    //     } else {
    //         return null
    //     }
        
    // }
    render(){
        return(
            <div>
                {/* <Route exact path="/listings/:id" render={props => {
                const listing = this.findListing("19")
                return <ListingContainer {...props} listing={listing} />}
                }/> */}
                <Listings listings={this.props.listings} />
                
            </div>
        )
    }
    
}
const mapStateToProps = ({listings}) => ({listings})
export default connect(mapStateToProps, {fetchListings})(ListingsContainer)