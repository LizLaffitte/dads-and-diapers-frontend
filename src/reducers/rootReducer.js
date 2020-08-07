import { combineReducers } from 'redux'

function manageListings(state=[], action){
    switch(action.type){
        case 'ADD_LISTINGS':
            return action.listings
        case 'ADD_LISTING':
            return [...state, action.listing]

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