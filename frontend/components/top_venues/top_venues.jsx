import React from 'react';
import { Link } from 'react-router-dom';

class TopVenues extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestVenues();
    }

    render() {
        const staples = this.props.venues.filter(venue => 
            venue.name === 'Staples Center'    
        )

        const oracle = this.props.venues.filter(venue =>
            venue.name === 'Oracle Arena'
        )

        const tdGarden = this.props.venues.filter(venue =>
            venue.name === 'TD Garden'
        )

        const barclays = this.props.venues.filter(venue =>
            venue.name === 'Barclays Center'
        )

        if (this.props.venues.length === 0) {
            return (
                <div>
                    Loading venues...
                </div>
            )
        }

        return (
            <div className="top-teams-div">
                <label className="top-teams-label">Popular Venues</label>
                <ul className="top-teams-list">
                    <li className="top-teams-list-item" >
                        {/* <div className="staples-div"> */}
                        <Link to={`/venues/${staples[0].id}`}>
                            <div className="staples-div">
                            </div>
                        </Link>
                        {/* </div> */}
                        <p className="top-teams-text">
                            <Link to={`/venues/${staples[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Staples Center</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={`/venues/${oracle[0].id}`}>
                            <div className="oracle-div">
                            </div>
                        </Link>
                        <p className="top-teams-text">
                            <Link to={`/venues/${oracle[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Oracle Arena</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={`/venues/${tdGarden[0].id}`}>
                            <div className="td-garden-div">
                            </div>
                        </Link>
                        <p className="top-teams-text">
                            <Link to={`/venues/${tdGarden[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>TD Garden</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={`/venues/${barclays[0].id}`}>
                            <div className="barclays-div">
                            </div>
                        </Link>
                        <p className="top-teams-text">
                            <Link to={`/venues/${barclays[0].id}`} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Barclays Center</Link>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopVenues;