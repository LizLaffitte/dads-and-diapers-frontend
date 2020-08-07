import React, { Component } from 'react'
import Listings from '../components/Listings'
import { connect } from 'react-redux'

class ListingsContainer extends Component {
    render(){
        return (
            <div>
                <h1>Listings Container</h1>
                <Listings />
            </div>
        )
    }
}

export default connect()(ListingsContainer)
