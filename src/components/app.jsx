import React, { Component } from 'react';
import Gif from './gif';
import SearchBar from './search-bar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="zOD5XeexlbCoFWynhy"/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
