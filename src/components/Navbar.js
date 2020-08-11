import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return(
           <nav>
               <NavLink to="/listings">Listings</NavLink>
           </nav>
        )
    }
}
export default NavBar