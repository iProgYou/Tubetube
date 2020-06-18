import React from 'react';
import styles from './video_index_container.module.css';
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }
    
    shuffleVideos(videoArr) {
        for (let i = 0; i < videoArr.length; i++) {
            let randIdx = Math.floor((Math.random() * i)) % videoArr.length;
            let temp = videoArr[i]
            videoArr[i] = videoArr[randIdx]
            videoArr[randIdx] = temp
        }
        return videoArr
    }

    render() {     
        if (!this.props.videos) return null;
        return(
            <div className={styles.videoIndexContainer}>
                {this.shuffleVideos(Object.values(this.props.videos)).map(( video ) => (
                    <VideoIndexItem key={video.id} video={video}/>
                ))}
            </div>
        )
    }
}

export default VideoIndex;

