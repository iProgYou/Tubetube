import React from 'react';
import styles from './video_index.module.css'

const VideoIndexItem = ({ video }) => {
    
    console.log(video);
    // Clickin on creator should eventually link to page
    return(
    <div className={styles.item}>
        <div className={styles.thumbnailContainer}>
            <img 
                src={video.thumbnailUrl} 
                alt=""
                className={styles.thumbnail}
            />
        </div>
        <div className={styles.thumbText}>
            <div className="biggerIcon">{video.creator[0].toUpperCase()}</div>
            <div className={styles.head}>{video.title}</div>
            <div>{video.creator}</div> 
            <div>{video.plays}</div>
        </div>
    </div>
    )
}

export default VideoIndexItem;