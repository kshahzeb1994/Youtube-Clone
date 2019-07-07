import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/Youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items })
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log("From the App's state", this.state.selectedVideo);
  }

  render() {
    return  (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos= {this.state.videos}/>
      </div>
    );
  }
}

export default App;
