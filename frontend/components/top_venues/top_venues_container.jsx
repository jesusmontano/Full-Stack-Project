import { connect } from 'react-redux';
import { requestVenues } from '../../actions/venue_actions';
import TopVenues from './top_venues';

const mapDispatchToProps = dispatch => ({
    requestVenues: () => dispatch(requestVenues())
});

export default connect(null, mapDispatchToProps)(TopVenues);