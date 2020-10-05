import React, {Component} from 'react'
import Listing from './Listing'
import {orderBy} from 'lodash'

class Listings extends Component {
    
    
   sortedCollection = () => {
       return orderBy(this.props.listings, function(l){return l.attributes.address}, ["desc"])
   }

        
   renderListings = () => {
       return this.sortedCollection().map(listing => {
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

export default Listings