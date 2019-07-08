import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

const receiveTeam = (team) => {
    debugger;
    return ({
        type: RECEIVE_TEAM,
        team
    })
}

export const requestTeams = () => dispatch => (
    TeamAPIUtil.fetchTeams().then(teams => dispatch({ type: RECEIVE_TEAMS, teams }))
);

export const requestTeam = (id) => dispatch => {
    debugger;
    return (
    TeamAPIUtil.fetchTeam(id).then(team => dispatch(receiveTeam(team)))
)};