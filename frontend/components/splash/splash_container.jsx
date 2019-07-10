import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Login',
        opposingFormType: 'Need a SeatNerd account?',
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button className="other-form-link" onClick={() => dispatch(openModal('signup'))}>
              Register here
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoUser: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));