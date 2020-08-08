import React, {Component} from 'react'
import Listing from './Listing'

class Listings extends Component {
   renderListings = () => {
       return this.props.listings.map(listing => {
           console.log(listing)
           return (<Listing key={listing.id} listing={listing} />)
       })
   }
    render(){

        return (
            <div>
                {this.renderListings()}
            </div>
        )
    }
}

export default Listings