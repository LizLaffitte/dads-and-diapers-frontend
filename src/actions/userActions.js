export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}


//async
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/login', {
            credentials: 'include',
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                console.log(userData)
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}


export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3001/get_current_user', { 
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                console.log(userData)
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log("test"))
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: "DELETE"
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData)
            } else {
                console.log(userData)
            }
            
        })
        .catch(console.log())
    }
}