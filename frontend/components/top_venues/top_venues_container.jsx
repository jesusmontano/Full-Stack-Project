import { connect } from 'react-redux';
import { requestVenues } from '../../actions/venue_actions';
import TopVenues from './top_venues';

const mapStateToProps = state => {
    return ({
        venues: Object.values(state.entities.venues)
    })
}

const mapDispatchToProps = dispatch => ({
    requestVenues: () => dispatch(requestVenues())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopVenues);