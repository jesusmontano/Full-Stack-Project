import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        opposingFormType: 'Already have a SeatNerd account?'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="other-form-link" onClick={() => dispatch(openModal('login'))}>
              Log in here
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoUser: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);