import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return(
           <nav>
               <NavLink to="/listings">Listings</NavLink> | <NavLink to="/listings/new">Add Listing</NavLink> 
           </nav>
        )
    }
}
export default NavBar