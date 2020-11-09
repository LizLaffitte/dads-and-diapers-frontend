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

export const deleteReview = reviewId => {
    return{
        type: "DELETE_REVIEW",
        reviewId
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
        return fetch('https://dads-and-diapers-be.herokuapp.com/api/v1/reviews', {
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
        return fetch('https://dads-and-diapers-be.herokuapp.com/api/v1/reviews', {
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
        return fetch(`https://dads-and-diapers-be.herokuapp.com/api/v1/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            }, body: JSON.stringify(review)
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.error){
                alert(resp.error)
            } else {
                dispatch(editReview(resp.data))
            }
        }).catch(console.log())
    }
}

export const destroyReview = (reviewId) => {
    return dispatch => {
        return fetch(`https://dads-and-diapers-be.herokuapp.com/api/v1/reviews/${reviewId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.error){
                alert(resp.error)
            } else {
                console.log(resp.notice)
                dispatch(deleteReview(reviewId))
            }
        }).catch(console.log())
    }
}