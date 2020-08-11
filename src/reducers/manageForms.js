
export default (state = {name: '', address: ''}, action) => {
    switch(action.type) {
        case "SET_LISTING_FORM_DATA":
            return action.listingFormData
        default:
            return state
    }
}