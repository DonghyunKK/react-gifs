import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render () {
    const gifs = [
      { id: "LmNwrBhejkK9EFP504" },
      { id: "PiQejEf31116URju4V" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="LmNwrBhejkK9EFP504" />
          </div>
        </div>
        <div className="right-scene">
            <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
