import React from 'react';
import { Link } from 'react-router-dom';

const SearchPageItem = ({ video }) => {
    
    // console.log(video);
    // Clickin on creator should eventually link to page
    return(
        <div> 
            <Link to={`/video/${video.id}`} >
                <img 
                    src={video.thumbnailUrl} 
                    alt=""
                    
                />
            </Link>
            <Link to={`/video/${video.id}`} >
                <div >{video.creator[0].toUpperCase()}</div>
                <div>
                    <div>{video.title}</div>
                    <div>{video.creator}</div> 
                    <div>{video.plays} views</div>
                </div>
            </Link>
        </div>
    )
}

export default SearchPageItem;