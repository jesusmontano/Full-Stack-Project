import { connect } from 'react-redux';
import { requestTeams } from '../../actions/team_actions';
import TeamIndex from './team_index';

const mapStateToProps = ({ entities: { teams } }) => ({
    teams: Object.values(teams)
});

const mapDispatchToProps = dispatch => ({
    requestTeams: () => dispatch(requestTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);