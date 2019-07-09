import React from 'react';

class CreateTicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.ticket;
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
                <form onSubmit={this.handleSubmit}>
                    <h3>Create Ticket Listing</h3>
                    <label>Owner Id
                        <input
                        type="text"
                        value={this.state.owner_id}
                        onChange={this.update('owner_id')} />
                    </label>

                    <label>Venue ID
                        <textarea
                        value={this.state.venue_id}
                        onChange={this.update('venue_id')} />
                    </label>

                    <input type="submit" value="Create New Ticket Listing" />
                </form>
            </div>
        )
    }

}

export default CreateTicketForm;