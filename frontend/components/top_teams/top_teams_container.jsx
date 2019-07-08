import { connect } from 'react-redux';
import { requestTeams } from '../../actions/team_actions';
import TopTeams from './top_teams';

const mapDispatchToProps = dispatch => ({
    requestTeams: () => dispatch(requestTeams())
});

export default connect(null, mapDispatchToProps)(TopTeams);