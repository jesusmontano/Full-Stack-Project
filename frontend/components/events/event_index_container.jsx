import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import { requestVenues } from '../../actions/venue_actions';
import { requestTeams } from '../../actions/team_actions';
import EventIndex from './event_index';

const mapStateToProps = ({ entities: { events, venues, teams } }) => ({
    events: Object.values(events),
    venues: venues,
    teams: teams
});

const mapDispatchToProps = dispatch => ({
    requestEvents: () => dispatch(requestEvents()),
    requestVenues: () => dispatch(requestVenues()),
    requestTeams: () => dispatch(requestTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);