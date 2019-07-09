import React from 'react';

class EventTicketsIndex extends React.Component {
    componentDidMount() {
        this.props.requestEvents();
        this.props.fetchTickets();
    }

    render() {
        return(
            <div>
                Testing...
            </div>
        )
    }
}

export default EventTicketsIndex;