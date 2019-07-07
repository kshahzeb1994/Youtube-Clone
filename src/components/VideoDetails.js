import React from 'react';

const VideoDetails = ( {video} ) => {
  if(video) {
    return (
      <div>
        <img src={video.snippet.thumbnails.high.url}/>
        <div>{video.snippet.title}</div>
      </div>
    );
  }
  return <div></div>;
}

export default VideoDetails;
