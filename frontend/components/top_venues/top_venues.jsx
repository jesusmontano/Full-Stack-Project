import React from 'react';
import { Link } from 'react-router-dom';

class TopVenues extends React.Component {
    componentDidMount() {
        this.props.requestVenues();
    }

    render() {
        return (
            <div className="top-teams-div">
                <label className="top-teams-label">Popular Venues</label>
                <ul className="top-teams-list">
                    <li className="top-teams-list-item" >
                        {/* <div className="staples-div"> */}
                        <Link to={'/venues/12'}>
                            <div className="staples-div">
                            </div>
                        </Link>
                        {/* </div> */}
                        <p className="top-teams-text">
                            <Link to={'/venues/12'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Staples Center</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={'/venues/13'}>
                            <div className="oracle-div">
                            </div>
                        </Link>
                        <p className="top-teams-text">
                            <Link to={'/venues/13'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Oracle Arena</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={'/venues/15'}>
                            <div className="td-garden-div">
                            </div>
                        </Link>
                        <p className="top-teams-text">
                            <Link to={'/venues/15'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>TD Garden</Link>
                        </p>
                    </li>
                    <li className="top-teams-list-item">
                        <Link to={'/venues/16'}>
                            <div className="barclays-div">
                            </div>
                        </Link>
                        <p className="top-teams-text">
                            <Link to={'/venues/16'} style={{ textDecoration: 'none', color: 'rgb(31, 31, 31)' }}>Barclays Center</Link>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopVenues;