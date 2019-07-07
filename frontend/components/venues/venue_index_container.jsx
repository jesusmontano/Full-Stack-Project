import { connect } from 'react-redux';
import { requestVenues } from '../../actions/venue_actions';
import VenueIndex from './venue_index';

const mapStateToProps = ({ entities: { venues } }) => ({
    venues: Object.values(venues)
});

const mapDispatchToProps = dispatch => ({
    requestVenues: () => dispatch(requestVenues())
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueIndex);