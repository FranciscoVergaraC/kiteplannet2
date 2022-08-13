import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import SpotList from '../SpotList/SpotList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spots: [
        {
          id: '1',
          imageSrc: 'https://www.latercera.com/resizer/jI8YsqdbEsxjycM0lfPN9qD74as=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/O5V3TW7UUZEF3IC3ERBCWWQU3Y.jpg',
          name: 'Puclaro',
          address: 'Gualluguaica',
          city: 'La Serena',
          state: 'Coquimbo',
          zipCode: '22010000',
          category: 'Freestyle',
          rating: '9/10',
          reviewCount: '1000'
        }
      ]
    }
  }
  render(){
  return(
    <div className="App">
      <h1>Kite Plannet</h1>
      <SearchBar />
      <SpotList spots={this.state.spots}/>
    </div>
  )
  }}

export default App;
