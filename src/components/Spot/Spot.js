import React from 'react';
import './Spot.css';


class Spot extends React.Component {
    render(){
        return (
            <div className="Spot">
                <div className="image-container">
                    <img src={this.props.spot.imageSrc} alt=''/>
                </div>
                <h2>{this.props.spot.name}</h2>
                <div className="Spot-information">
                    <div className="Spot-address">
                        <p>{this.props.spot.address}</p>
                        <p>{this.props.spot.city}</p>
                        <p>{this.props.spot.state}{this.props.spot.zipCode}</p>
                    </div>
                    <div className="Spot-reviews">
                        <h3>{this.props.spot.category}</h3>
                        <h3 className="rating">{this.props.spot.rating}</h3>
                        <p>{this.props.spot.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Spot;