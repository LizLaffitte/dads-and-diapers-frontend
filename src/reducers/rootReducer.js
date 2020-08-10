import { combineReducers } from 'redux'
import manageListings from './manageListings'
import manageReviews from './manageReviews'
import currentUser from './currentUser'

const rootReducer = combineReducers({
    listings: manageListings,
    reviews: manageReviews,
    currentUser: currentUser
})

export default rootReducer