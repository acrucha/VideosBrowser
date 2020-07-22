import React from 'react';
import './VideoLoading.css';

const VideoDetail = ({ video }) => {

    if (!video) {
        return(
            <div className="loading">
                <div className="load ui active inverted dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>
                <p></p>
            </div>
            
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        
    );

};

export default VideoDetail;