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
                <form onSubmit={this.handleSubmit}>
                    <label> Price
                        <input 
                            type="text"
                            value={this.state.price}
                            onChange={this.update('price')}/>
                    </label>
                    <input type="submit" value="Update Price"/>
                </form>
                <div>
                    The form for updating the price will go here.
                    The ticket ID is: {this.props.ticket.id}
                </div>
            </div>
        )
    }


}

export default UpdatePriceTicketForm; 