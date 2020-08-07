import React, { Component } from 'react'
import Listings from '../components/Listings'
import { connect } from 'react-redux'
import {fetchListings} from '../actions/listingActions'

class ListingsContainer extends Component {
    componentDidMount(){
        this.props.fetchListings()
      }

    render(){
        return (
            <div>
                <h1>Listings Container</h1>
                <Listings />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchListings: () => dispatch(fetchListings())
    }
  }
export default connect(null, mapDispatchToProps)(ListingsContainer)
