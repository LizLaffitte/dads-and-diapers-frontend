export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//async
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "Liz", password:"dinos"})
          })
        .then(response => response.json())
        .then(userData => dispatch(setCurrentUser(userData)))
    }
}