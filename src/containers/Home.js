import React from 'react'
import Search from '../components/Search'
import ListingsContainer from '../containers/ListingsContainer'

function Home(props){
    return(
        <>
        <Search collection={props.listings} />
        <ListingsContainer listings={props.listings}/>
        </>
    )
}

export default Home