export const setListingFormData = listing => {
    const listingFormData = {
        name: listing.attributes.name,
        address: listing.attributes.address
    }
    return {
        type: "SET_LISTING_FORM_DATA",
        listingFormData
    }
}