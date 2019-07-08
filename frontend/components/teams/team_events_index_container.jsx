import { connect } from 'react-redux';
import { requestTeam } from '../../actions/team_actions';
import TeamEventsIndex from './team_events_index';

const mapStateToProps = (state, ownProps) => {
    const teamId = Number(ownProps.match.params.teamId);
    const team = state.entities.teams[teamId];
    const homeEvents = Object.values(state.entities.events).filter(event => event.home_team_id === teamId);
    const awayEvents = Object.values(state.entities.events).filter(event => event.away_team_id === teamId);

    return ({
        team: team,
        homeEvents: homeEvents,
        awayEvents: awayEvents
    })
};

const mapDispatchToProps = dispatch => ({
    requestTeam: (id) => dispatch(requestTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamEventsIndex);