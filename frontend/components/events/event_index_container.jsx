import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = ({ entities: { events } }) => ({
    events: Object.values(events)
});

const mapDispatchToProps = dispatch => ({
    requestEvents: () => dispatch(requestEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);