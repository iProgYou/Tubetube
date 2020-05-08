import React from 'react';
import { Link } from 'react-router-dom';
import styles from './reccomended.module.css';

const ReccomendedIndexItem = ({ video }) => (
    <div className={styles.reccomendedVideoContainer}>
        <Link to={`/video/${video.id}`} className={styles.thumbContainer}>
            <img 
                src={video.thumbnailUrl} 
                alt=""
                className={styles.reccomendedThumbnail}
            />
        </Link>
        <Link to={`/video/${video.id}`} className={styles.reccomendedThumbText}>
            <div className={styles.reccomendedHead}>{video.title}</div>
            <div>{video.creator}</div> 
            <div>{video.plays} views</div>
        </Link>
    </div>
);

export default ReccomendedIndexItem;