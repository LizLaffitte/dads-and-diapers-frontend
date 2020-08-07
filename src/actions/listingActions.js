export const fetchListings = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/listings')
        .then(response => response.json())
        .then(listingData => console.log(listingData))
    }
}