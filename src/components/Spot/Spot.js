import React from 'react';
import './Spot.css';

/*
  Obejct prototipe; 
  ImageURL: "https://www.latercera.com/resizer/jI8YsqdbEsxjycM0lfPN9qD74as=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/O5V3TW7UUZEF3IC3ERBCWWQU3Y.jpg"
  averageWind: null
  countryCode: "CL"
  countryName: "Chile"
  endMonthSeason: null
  id: 1
  name: "Puclaro"
  rating: null
  regionCode: "CO"
  regionName: "La Serena"
  reviewCount: null
  spotType: "Flat"
  startMonthSeason: null
  windDirection: "Side Shore"
  */


class Spot extends React.Component {
    render(){
        return (
            <div className="Spot">
                <div className="image-container">
                    <img src={this.props.spot.ImageURL} alt=''/>
                </div>
                <h2>{this.props.spot.name}</h2>
                <div className="Spot-information">
                    <div className="Spot-address">
                        <p>{this.props.spot.regionName}</p>
                        <p>{this.props.spot.country}</p>
                    </div>
                    <div className="Spot-reviews">
                        <h3>{this.props.spot.spotType}</h3>
                        <h3 className="rating">{this.props.spot.rating}</h3>
                        <p>{this.props.spot.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

/*
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
                        <p>{this.props.spot.country}</p>
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

*/

export default Spot;