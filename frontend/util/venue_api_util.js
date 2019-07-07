export const fetchVenues = () => (
    $.ajax({
        method: 'get',
        url: 'api/venues'
    })
);

export const fetchVenue = (id) => (
    $.ajax({
        method: 'get',
        url: `api/venues/${id}`
    })
);