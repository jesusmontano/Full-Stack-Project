export const fetchTeams = () => (
    $.ajax({
        method: 'get',
        url: 'api/teams'
    })
);

export const fetchTeam = (id) => (
    $.ajax({
        method: 'get',
        url: `api/teams/${id}`
    })
);