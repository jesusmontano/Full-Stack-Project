import React from 'react';

class UpdatePriceTicketForm extends React.Component {
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
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                Testing...
                <div>
                    {this.state.id}
                </div>
            </div>
        )
    }


}

export default UpdatePriceTicketForm; 