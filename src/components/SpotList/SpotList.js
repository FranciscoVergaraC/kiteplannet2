import React from 'react';
import './SpotList.css';
import Spot from '../Spot/Spot';

class SpotList extends React.Component {
    render() {
        return (
            <div className="SpotList">
                { this.props.spots.map(spot => {
                    console.log(spot)
                    return <Spot spot={spot} key={spot.id}/>;
                })}
            </div>
        );
    }
}

export default SpotList;