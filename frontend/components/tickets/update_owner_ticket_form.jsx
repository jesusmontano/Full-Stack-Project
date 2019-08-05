import React from 'react';

class UpdateOwnerTicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.ticket;
    }

    componentDidMount() {
        this.props.fetchTicket(this.props.match.params.ticketId);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/account'));
    }

    render() {
        return (
            <div>
                Please work...
                This is the currentUserID: 
                {this.props.currentUserID}
            </div>
        )
    }
}

export default UpdateOwnerTicketForm;