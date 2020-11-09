export const addUsers = users => {
    return {
        type: "ADD_USERS",
        users
    }
}

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
        return fetch('https://dads-and-diapers-be.herokuapp.com/login', {
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
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}

export const signup = credentials => {
    return dispatch => {
        return fetch('https://dads-and-diapers-be.herokuapp.com/signup', {
            credentials: 'include',
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.error){
                console.log(userData.errors)
            } else {
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log())
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('https://dads-and-diapers-be.herokuapp.com/get_current_user', { 
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
                dispatch(setCurrentUser(userData.data))
            }
            
        })
        .catch(console.log("test"))
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('https://dads-and-diapers-be.herokuapp.com/logout', {
            credentials: 'include',
            method: "DELETE"
          })
        .then(response => response.json())
        .then(userData => {
            if(userData.errors){
                console.log(userData.errors)
            } else {
                console.log(userData.notice)
            }
            
        })
        .catch(console.log())
    }
}

export const fetchUsers = () => {
    return dispatch => {
        return fetch('https://dads-and-diapers-be.herokuapp.com/api/v1/users', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(userData => dispatch(addUsers(userData.data)))
        .catch(console.log())
    }
}