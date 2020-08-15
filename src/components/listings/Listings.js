import React, {Component} from 'react'
import { connect } from 'react-redux'
import Listing from './Listing'

class Listings extends Component {
    componentDidMount(){
        // this.props.fetchListings()
    }

   renderListings = () => {
       
       return this.props.listings.map(listing => {
           return (<Listing key={listing.id} listing={listing} />)
       })
   }
    render(){

        return (
            <div className="flex" id="listings">             
                {this.renderListings()}
            </div>
        )
    }
}

export default connect(null, {fetchListings})(Listings)