import React from "react";
import "./SearchBar.css";
import getCountries from "../../util/GeoData.js";

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            countries: [
            ]
        }
        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.renderCountries = this.renderCountries.bind(this);
    }



    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange(e){
        this.setState({
            term: e.target.value
        })
    }
    
    handleLocationChange(e){
        this.setState({
            location: e.target.value
        })
    }

    handleSearch(e){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)}
                       key={sortByOptionValue}     
                       onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                        {sortByOption}
                        </li>);
        });
    }


     renderCountries(){
      return this.state.countries.map(country => {
            return (<option key={country.code} value={country.code}>{country.country}</option>)
        })
    }

    componentDidMount(){
        getCountries().then(countries => {
            this.setState({
                countries: countries
            })
        })
    }

    render() {
        return (
            <div className="SearchBar" onLoad={this.componentDidMount}>
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Spot" onChange={this.handleTermChange} />
                    <select onChange={this.handleLocationChange} >
                        {this.renderCountries()}
                    </select>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }   
}

export default SearchBar;