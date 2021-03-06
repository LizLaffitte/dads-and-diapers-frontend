export default function manageListings(state=[], action){
    switch(action.type){
        case 'ADD_LISTINGS':
            return action.listings
        case 'ADD_LISTING':
            return [...state, action.listing]
        case 'EDIT_LISTING':
            return state.map(listing => listing.id === action.listing.id ? action.listing : listing)
        default:
            return state
    }
    
}