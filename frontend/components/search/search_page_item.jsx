import React from 'react';
import styles from './search_page.module.css';
import { Link } from 'react-router-dom';

const SearchPageItem = ({ video }) => {
    
    // console.log(video);
    // Clickin on creator should eventually link to page
    return(
        <div className={styles.item}> 
            <Link to={`/video/${video.id}`} >
                <img 
                    src={video.thumbnailUrl} 
                    alt=""
                    className={styles.thumbnail}
                />
            </Link>
            <Link to={`/video/${video.id}`} >
                <div>
                    <div>{video.title}</div>
                    <div>
                        <div>{video.creator}</div> 
                        <div>{video.plays} views</div>
                        <div>{video.createdAt}</div>
                    </div>
                    <div>{video.description}</div>
                </div>
            </Link>
        </div>
    )
}

export default SearchPageItem;