export default function manageListings(state=[], action){
    switch(action.type){
        case 'ADD_USERS':
            return action.users
        case 'ADD_USER':
            return [...state, action.user]
        case 'EDIT_LISTING':
            return state.map(user => user.id === action.user.id ? action.user : user)
        default:
            return state
    }
    
}