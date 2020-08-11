import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings, updateListing} from '../actions/listingActions'
import NewListingFormWrapper from './NewListingFormWrapper'
import {Route, Switch} from 'react-router-dom'
import EditListingFormWrapper from './EditListingFormWrapper'


class ListingsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchListings()
      }

    render(){        
        return (
            <Switch> 
                <Route path="/listings/new" exact component={NewListingFormWrapper}/>
                <Route path="/listings/:id/edit" exact render={(props) => {
                            const listing = this.props.listings.find(listing => listing.id == props.match.params.id)                  
                            return <EditListingFormWrapper {...props} listing={listing} />}}  />
                <Route path="/listings" exact><Listings listings={this.props.listings}/></Route>
            </Switch>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings()),
      updateListing: (listing) => dispatch(updateListing(listing))
    }
}

const mapStateToProps = ({listings}) => ({listings})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
