import React from 'react';
import styles from './video_index_container.module.css';
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos()
    }
    
    render() {     
        // console.log(this.props)
        // console.log(Object.values(this.props.videos))
        if (!this.props.videos) return null;
        // debugger
        return(
            <div className={styles.videoIndexContainer}>
                {Object.values(this.props.videos).map(( video ) => (
                    <VideoIndexItem key={video.id} video={video}/>
                ))}
            </div>
        )
    }
}

export default VideoIndex;

