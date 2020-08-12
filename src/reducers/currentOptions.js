// const initialListingState = JSON.parse(localStorage.currentListing)
// const initialListingState = localStorage.currentListing
// console.log(initialListingState)
export default(state = {currentListing: null, currentReview: null}, action) => {
    switch(action.type){
        case 'SET_CURRENT_LISTING':
            if(action.listing !== null && action.listing !== undefined)  {
                localStorage.setItem('currentListing', JSON.stringify(action.listing))
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