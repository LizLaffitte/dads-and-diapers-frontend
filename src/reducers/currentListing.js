export default(state =  null, action) => {
    switch(action.type){
        case 'SET_CURRENT_LISTING':
            if(action.listing !== null && action.listing !== undefined)  {
                localStorage.setItem('currentListing', JSON.stringify(action.listing))
                return action.listing
            }
            else {
                return null
            }
        case "CLEAR_CURRENT_LISTING":
            localStorage.setItem('currentListing', "null")
            return  null
        default:
            return state
    }
}