import { connect } from 'react-redux';
import { requestTeam } from '../../actions/team_actions';
import TeamEventsIndex from './team_events_index';
import { requestEvents } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/ticket_actions'
import { requestVenues } from '../../actions/venue_actions';
import { requestTeams } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
    const teamId = Number(ownProps.match.params.teamId);
    const team = state.entities.teams[teamId];
    const homeEvents = Object.values(state.entities.events).filter(event => event.home_team_id === teamId);
    const awayEvents = Object.values(state.entities.events).filter(event => event.away_team_id === teamId);
    const events = state.entities.events;
    const teams = state.entities.teams;
    const venues = state.entities.venues;

    return ({
        team: team,
        homeEvents: homeEvents,
        awayEvents: awayEvents,
        events: events,
        teams: teams,
        venues: venues
    })
};

const mapDispatchToProps = dispatch => ({
    requestTeam: (id) => dispatch(requestTeam(id)),
    requestEvents: () => dispatch(requestEvents()),
    fetchTickets: () => dispatch(fetchTickets()),
    requestVenues: () => dispatch(requestVenues()),
    requestTeams: () => dispatch(requestTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamEventsIndex);