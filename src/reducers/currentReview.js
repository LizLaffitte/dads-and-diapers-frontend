export default(state = null, action) => {
    switch(action.type){
        case "SET_CURRENT_REVIEW":
            localStorage.setItem('currentReview', JSON.stringify(action.review))
            return action.review
        case "CLEAR_CURRENT_REVIEW":
            localStorage.setItem('currentReview', "null")
            return null
        default:
            return state
    }
}