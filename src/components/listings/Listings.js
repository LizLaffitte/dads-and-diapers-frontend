import React, {Component} from 'react'
import {orderBy} from 'lodash'
import Listing from './Listing'



class Listings extends Component {
    
    
   sortedCollection = () => {
       return orderBy(this.props.listings, function(l){return l.attributes.name}, ["asc"])
   }

        
   renderListings = () => {
       return this.sortedCollection().map(listing => {
        
           return (<Listing key={listing.id} listing={listing} more={true}/>)
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