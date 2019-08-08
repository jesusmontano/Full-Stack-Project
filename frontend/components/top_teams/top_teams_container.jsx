import { connect } from 'react-redux';
import { requestTeams } from '../../actions/team_actions';
import TopTeams from './top_teams';

const mapStateToProps = state => {
    return ({
    teams: Object.values(state.entities.teams)
})
}

const mapDispatchToProps = dispatch => ({
    requestTeams: () => dispatch(requestTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTeams);