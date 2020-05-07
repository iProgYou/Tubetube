import React from 'react';
import ReccomendedIndexItem from './reccomended_index_item';
import styles from './reccomended.module.css';


class ReccomendedIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { relatedVideos } = this.props;

        if (!relatedVideos || !relatedVideos[0]) return null;
        return(
            <div>
                {relatedVideos.map(video => (
                    <ReccomendedIndexItem 
                        key={video.id}
                        video={video}
                    />
                ))}
            </div>
        )
    }
};

export default ReccomendedIndex;