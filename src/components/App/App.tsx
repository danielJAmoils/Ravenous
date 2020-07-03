import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar"
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp'

type AppState = {
  businesses: {
    id: string;
    imageSrc: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    category: string;
    rating: number;
    reviewCount: number;
}[] | undefined//need better type
}

class App extends React.Component<{}, AppState>{

  constructor(props: Readonly<{}>){
    super(props)
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term: string, location: string, sortBy: string){
    Yelp.search(term, location, sortBy)
    .then(businesses => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
     return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        {this.state.businesses ? <BusinessList businesses={this.state.businesses}/> : undefined}
      </div>
    )
  }
}

export default App;
