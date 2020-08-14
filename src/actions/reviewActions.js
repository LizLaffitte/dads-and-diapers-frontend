export const addReview = review => {
    return {
        type: "ADD_REVIEW",
        review
    }
}

export const addReviews = reviews => {
    return {
        type: "ADD_REVIEWS",
        reviews
    }
}

export const editReview = review => {
    return {
        type: "EDIT_REVIEW",
        review
    }
}

export const testReview = review => {
    return{
        type: "TEST_REVIEW",
        review
    }
}

export const setCurrentReview = review => {
    return {
        type: "SET_CURRENT_REVIEW",
        review
    }
}

export const clearCurrentReview = () => {
    return {
        type: "CLEAR_CURRENT_REVIEW"
    }
}

//Async

export const fetchReviews = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/reviews', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(reviewData => dispatch(addReviews(reviewData.data)))
        .catch(console.log())
    }
}

export const createReview = (reviewFormData) => {
    return dispatch => {
        const review = {review: reviewFormData}
        return fetch('http://localhost:3001/api/v1/reviews', {
        method: "POST",
            headers: {
              "Content-Type": "application/json"
            }, body: JSON.stringify(review)
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.errors){
                alert(resp.errors)
            } else {
                dispatch(addReview(resp.data))
            }
        })
        .catch(console.log())
    }
}

export const updateReview = (reviewUpdateData, reviewId) => {
    return dispatch => {
        const review = {review: reviewUpdateData}
        return fetch(`http://localhost:3001/api/v1/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            }, body: JSON.stringify(review)
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.errors){
                alert(resp.errors)
            } else {
                dispatch(editReview(resp.data))
            }
        })
    }
}

