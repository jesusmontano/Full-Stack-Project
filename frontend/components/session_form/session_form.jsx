import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    handleGuestSubmit(e) {
        e.preventDefault();
        this.props.demoUser({email: 'demo@user.com', username: 'demouser', password: 'password'}).then(() => this.props.history.push("/"))
            .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br/>
                    <p className="login-signup-prompt">Sign up for SeatNerd</p>
                <br />
                    {/* Please {this.props.formType} or {this.props.otherForm}
                    {this.renderErrors()} */}
                    <div className="login-form">
                        <br />
                        <label className="login-signup-form-label">Email Address
              <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label className="login-signup-form-label">Username
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label className="login-signup-form-label">Password
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <br/>
                        <button onClick={this.handleGuestSubmit}>Login as demo user</button>
                        <br/>
                        <div>
                            Already have a SeatNerd account? {this.props.otherForm}
                        </div>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);