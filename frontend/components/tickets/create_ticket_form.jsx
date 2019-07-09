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
                    <h3>Sell Your Ticket on SeatNerd</h3>
                    
                <form onSubmit={this.handleSubmit}>

                    <label>Owner ID
                        <input
                        type="text"
                        value={this.state.owner_id}
                        onChange={this.update('owner_id')} />
                    </label>

                    <label>Venue ID
                        <input
                        type="text"
                        value={this.state.venue_id}
                        onChange={this.update('venue_id')} />
                    </label>

                    <label>Event ID
                        <input
                        type="text"
                        value={this.state.event_id}
                        onChange={this.update('event_id')} />
                    </label>

                    <label>Price
                        <input
                        type="text"
                        value={this.state.price}
                        onChange={this.update('price')} />
                    </label>

                    <label>Row
                        <input
                        type="text"
                        value={this.state.row}
                        onChange={this.update('row')} />
                    </label>

                    <label>Section
                        <input
                        type="text"
                        value={this.state.section}
                        onChange={this.update('section')} />
                    </label>

                    <input type="submit" value="Create New Ticket Listing" />
                </form>
            </div>
        )
    }

}

export default CreateTicketForm;