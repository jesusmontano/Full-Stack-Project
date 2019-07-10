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
                <div className="main-ticket-form-div">
                    <h3 className="add-tickets-header">Add Tickets</h3>
                    <h2 className="create-ticket-instructions">Upload your tickets, add a price, and get paid. Our
                        transparent pricing means more money in your pocket.
                    </h2>
                </div>
                    
                <form className="create-ticket-form" onSubmit={this.handleSubmit}>

                    <label className="create-form-inputs">Owner ID
                        <input className="create-ticket-input"
                        type="text"
                        value={this.state.owner_id}
                        onChange={this.update('owner_id')} />
                    </label>

                    <label className="create-form-inputs">Venue ID
                        <input
                        className="create-ticket-input"
                        type="text"
                        value={this.state.venue_id}
                        onChange={this.update('venue_id')} />
                    </label>

                    <label className="create-form-inputs">Event ID
                        <input
                        className="create-ticket-input"
                        type="text"
                        value={this.state.event_id}
                        onChange={this.update('event_id')} />
                    </label>

                    <label className="create-form-inputs">Price
                        <input
                        className="create-ticket-input"
                        type="text"
                        value={this.state.price}
                        onChange={this.update('price')} />
                    </label>

                    <label className="create-form-inputs">Row
                        <input
                        className="create-ticket-input"
                        type="text"
                        value={this.state.row}
                        onChange={this.update('row')} />
                    </label>

                    <label className="create-form-inputs">Section
                        <input
                        className="create-ticket-input"
                        type="text"
                        value={this.state.section}
                        onChange={this.update('section')} />
                    </label>

                    <input className="sell-ticket-submit" type="submit" value="Add Ticket" />
                </form>
            </div>
        )
    }

}

export default CreateTicketForm;