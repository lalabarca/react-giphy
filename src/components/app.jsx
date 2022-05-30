// External imports
import React, { Component } from 'react';
import giphy from "giphy-api";

// Internal imports
import Gif from './gif';
import SearchBar from './search-bar';
import GifsList from './gifs_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT1XGx3mIWL2J6PMWc"
    }
  }

  search =(query)=> {
    giphy("VQEiTyY8Lk9HAByZ96ZU14bSCN3dUn7x").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif=(id)=> {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}  />
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
