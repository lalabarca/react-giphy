import React, { Component } from 'react';
import Gif from './gif';
import SearchBar from './search-bar';
import GifsList from './gifs_list';

class App extends Component {
  render() {
    const gifs = [
      {id: "xT1XGx3mIWL2J6PMWc"},
      { id: "3o6ozrk8O4UmyUjoXK"}
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="xT1XGx3mIWL2J6PMWc"/>
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
