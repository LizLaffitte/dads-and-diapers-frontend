const initialListingState = {
    attributes: {
        name: '',
        address: ''
    }
}
export default(state = {currentListing: initialListingState, currentReview: null}, action) => {
    switch(action.type){
        case 'SET_CURRENT_LISTING':
            if(action.listing) {
                return {...state, currentListing: action.listing}
            }
            else {
                return state
            }
        case "CLEAR_CURRENT_LISTING":
            return  {...state, currentListing: null}
        default:
            return state
    }
}