import React, { Component } from 'react'
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux'
import {fetchListings} from '../actions/listingActions'
import ListingInput from '../components/listings/ListingInput'

class ListingsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchListings()
      }

    render(){
        const {listings} = this.props
        return (
            <div>
                <h1>Listings Container</h1>
                <Listings listings={listings} />
                <ListingInput />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings())
    }
}

const mapStateToProps = ({listings}) => ({listings})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsContainer)
