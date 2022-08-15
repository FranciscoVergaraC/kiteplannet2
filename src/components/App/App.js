import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import SpotList from '../SpotList/SpotList';
import getSpots from '../../util/kiteApi';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spots: []
    }
  }

  componentDidMount(){
    getSpots()
    .then(spots => {
      console.log(spots)
      this.setState({spots: spots});
      console.log(this.state.spots)
    }).catch(err => {
      console.log(err);
    }
    )
  }
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

  /*
  Old Object:
          id: '1',
          imageSrc: 'https://www.latercera.com/resizer/jI8YsqdbEsxjycM0lfPN9qD74as=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/O5V3TW7UUZEF3IC3ERBCWWQU3Y.jpg',
          name: 'Puclaro',
          address: 'Gualluguaica',
          country: 'Chile',
          state: 'Coquimbo',
          zipCode: ' 22010000',
          category: 'Flat',
          rating: '9/10',
          reviewCount: '1000'
  */

  render(){
  return(
    <div className="App" >
      <h1>Kite Plannet</h1>
      <SearchBar />
      <SpotList spots={this.state.spots}/>
    </div>
  )
  }

}

export default App;
