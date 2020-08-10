export const addListing = listing => {
    return {
        type: "ADD_LISTING",
        listing
    }
}

export const addListings = listings => {
    return {
        type: "ADD_LISTINGS",
        listings
    }
}

export const editListing = listing => {
    return {
        type: "EDIT_LISTING",
        listing
    }
}

export const testListing = listing => {
    return{
        type: "TEST_LISTING",
        listing
    }
}

//Async

export const fetchListings = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/listings', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(listingData => dispatch(addListings(listingData.data)))
        .catch(console.log())
    }
}

export const createListing = (listingFormData) => {
    return dispatch => {
        const listing = {listing: listingFormData}
        return fetch('http://localhost:3001/api/v1/listings', {
        method: "POST",
            headers: {
              "Content-Type": "application/json"
            }, body: JSON.stringify(listing)
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.errors){
                alert(resp.errors)
            } else {
                dispatch(addListing(resp.data))
            }
        })
        .catch(console.log())
    }
}

export const updateListing = (listingUpdateData, listingId) => {
    return dispatch => {
        const listing = {listing: listingUpdateData}
        return fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            }, body: JSON.stringify(listing)
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.errors){
                alert(resp.errors)
            } else {
                dispatch(editListing(resp.data))
            }
        })
    }
}

