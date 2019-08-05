import React from 'react';

class UpdatePriceTicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.ticket;
    }
}