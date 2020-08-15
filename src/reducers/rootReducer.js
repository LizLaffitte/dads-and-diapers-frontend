import { combineReducers } from 'redux'
import manageListings from './manageListings'
import manageReviews from './manageReviews'
import currentUser from './currentUser'
import currentOptions from './currentOptions'
import manageForms from './manageForms'
import manageUsers from './manageUsers'

const rootReducer = combineReducers({
    listings: manageListings,
    reviews: manageReviews,
    users: manageUsers,
    currentUser,
    currentOptions,
    forms: manageForms
})

export default rootReducer