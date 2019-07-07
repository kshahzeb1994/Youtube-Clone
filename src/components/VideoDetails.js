import React from 'react';

const VideoDetails = ( {video} ) => {
  if(video) {
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="video player"/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default VideoDetails;
