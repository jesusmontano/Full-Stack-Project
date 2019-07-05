import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionFormLogin from './session_form_login';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
        opposingFormType: 'Need a SeatNerd account?'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
              Register here
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoUser: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormLogin);