import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/Youtube'

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  };

  render() {
    return  (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
