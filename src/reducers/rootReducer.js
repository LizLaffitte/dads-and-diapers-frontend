import { combineReducers } from 'redux'

function manageListings(state=[], action){
    switch(action.type){
        case 'ADD_LISTINGS':
            console.log(action.listings)
            return action.listings
        case 'ADD_LISTING':
            return [...state, action.listing]
        case 'EDIT_LISTING':
            return state.map(listing => listing.id == action.listing.id ? action.listing : listing)
        case 'TEST_LISTING':
            console.log("This is a test")
            return state
        default:
            return state
    }
    
}

function manageReviews(state=[], action){
    switch(action.type){
        default:
            return state
    }
}

const rootReducer = combineReducers({
    listings: manageListings,
    reivews: manageReviews
})

export default rootReducer