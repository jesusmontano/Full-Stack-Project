import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

export const requestTeams = () => dispatch => (
    TeamAPIUtil.fetchTeams().then(teams => dispatch({ type: RECEIVE_TEAMS, teams }))
);

export const requestTeam = (id) => dispatch => (
    TeamAPIUtil.fetchTeam(id).then(team => dispatch({ type: RECEIVE_TEAM, team }))
);