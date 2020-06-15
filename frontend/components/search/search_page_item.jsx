import React from 'react';
import styles from './search_page.module.css';
import { Link } from 'react-router-dom';

const SearchPageItem = ({ video }) => {

    const parseDate = () => {
        if(!video.createdAt) return null;
        console.log(video)
        let date = video.createdAt.slice(0,10).split('-')
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        let currentMonth = month[parseInt(date[1]) - 1]
        let currentDay = parseInt(date[2]).toString()
        let newDate = `${currentMonth} ${currentDay}, ${date[0]}`
        return newDate
    }
    
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
            <div className={styles.text}>
                <Link to={`/video/${video.id}`} >
                    <div className={styles.textContainer}>
                        <div className={styles.title}>{video.title}</div>
                        <div className={styles.videoInfo}>
                            <div>{video.creator}</div> 
                            <div>•</div>
                            <div>{video.plays} views</div>
                            <div>•</div>
                            <div>{parseDate()}</div>
                        </div>
                        <div className={styles.description}>{video.description}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SearchPageItem;