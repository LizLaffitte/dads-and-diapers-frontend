import React, {Component} from 'react'
import { connect } from 'react-redux'
import Listing from './Listing'
import {fetchListings} from '../../actions/listingActions'

class Listings extends Component {
    componentDidMount(){
        this.props.fetchListings()
    }

   renderListings = () => {
       
       return this.props.listings.map(listing => {
           return (<Listing key={listing.id} listing={listing} />)
       })
   }
    render(){

        return (
            <div>
                 <h1>Listings:</h1>                  
                {this.renderListings()}
            </div>
        )
    }
}

export default connect(null, {fetchListings})(Listings)