export const fetchEvents = () => { 
    return (
    $.ajax({
        method: 'get',
        url: 'api/events'
    })
)};

export const fetchEvent = (id) => (
    $.ajax({
        method: 'get',
        url: `api/events/${id}`
    })
);