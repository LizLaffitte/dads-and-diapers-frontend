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

export const fetchListings = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/listings', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(listingData => {
            if(listingData.errors){
                console.log(listingData.errors)
            }else {
                dispatch(addListings(listingData))
            }
        }
            )
    }
}

export const createListing = (listingFormData) => {
    return dispatch => {
        const listing = {listing: listingFormData}
        debugger
        return fetch('http://localhost:3000/api/v1/listings', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }, body: JSON.stringify(listing)
          })
        .then(response => response.json())
        .then(resp => {
            if(resp.error){
                alert(resp.error)
            } else {
                dispatch(addListing(resp))
            }
        })
    }
}

