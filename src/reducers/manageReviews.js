export default function manageListings(state=[], action){
    switch(action.type){
        case 'ADD_REVIEWS':
            return action.reviews
        case 'ADD_REVIEW':
            return [...state, action.review]
        case 'EDIT_REVIEW':
            return state.map(review => review.id == action.review.id ? action.review : review)
        default:
            return state
    }
    
}