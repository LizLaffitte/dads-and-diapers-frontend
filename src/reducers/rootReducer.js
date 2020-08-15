import { combineReducers } from 'redux'
import manageListings from './manageListings'
import manageReviews from './manageReviews'
import currentUser from './currentUser'
import currentReview from './currentReview'
import manageUsers from './manageUsers'
import currentListing from './currentListing'

const rootReducer = combineReducers({
    listings: manageListings,
    reviews: manageReviews,
    users: manageUsers,
    currentUser,
    currentListing,
    currentReview
})

export default rootReducer