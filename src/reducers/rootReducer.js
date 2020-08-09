import { combineReducers } from 'redux'
import manageListings from './manageListings'
import manageReviews from './manageReviews'
import currentUser from './currentUser'
import loginForm from './loginForm'

const rootReducer = combineReducers({
    listings: manageListings,
    reviews: manageReviews,
    currentUser: currentUser,
    loginForm: loginForm
})

export default rootReducer