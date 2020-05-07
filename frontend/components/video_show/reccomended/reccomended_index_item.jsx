import React from 'react';
import { Link } from 'react-router-dom';
import styles from './reccomended.module.css';

const ReccomendedIndexItem = ({ video }) => (
    <div>
        <Link to={`/video/${video.id}`} className={styles.reccomendedVideoContainer}>
            <img 
                src={video.thumbnailUrl} 
                alt=""
                className={styles.reccomendedThumbnail}
            />
        </Link>
        <Link to={`/video/${video.id}`} className={styles.reccomendedThumbText}>
            <div>
                <div className={styles.reccomendedHead}>{video.title}</div>
                <div>{video.creator}</div> 
                <div>{video.plays} views</div>
            </div>
        </Link>
    </div>
);

export default ReccomendedIndexItem;