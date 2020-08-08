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
            },
          })
        .then(response => response.json())
        .then(listingData => dispatch({type: 'ADD_LISTINGS', listings: listingData}))
    }
}
