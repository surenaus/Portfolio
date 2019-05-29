import React from 'react';
import video from '../static/videos/cback.webm';

export default class Video extends React.Component {
    render() {
        return (
            <video className="onlyforlg" playsinline="playsinline" autoplay="autoplay" loop="loop">
                <source src={video} type="video/mp4"/>}
            </video>
        )
    }
}