import React from 'react';
import './SpotList.css';
import Spot from '../Spot/Spot';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="SpotList">
                { this.props.businesses.map(business => {
                    console.log(business)
                    return <Business business={business} key={business.id}/>;
                })}
            </div>
        );
    }
}

export default BusinessList;