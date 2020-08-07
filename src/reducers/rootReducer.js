import { combineReduers } from 'redux'

function manageListings(state=[], action){
    switch(action.type){
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

const rootReducer = combineReduers({
    listings: manageListings,
    reivews: manageReviews
})

export default rootReducer