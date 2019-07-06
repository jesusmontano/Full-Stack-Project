import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state) => ({
    events: Object.values(state.events)
});

const mapDispatchToProps = dispatch => ({
    requestEvents: () => dispatch(requestEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);