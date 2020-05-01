import React from 'react';
import styles from './video_index.module.css';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos()
    }

    render() {     
        return(
            <div>
                {Object.values(this.props.videos).map((video) => (
                    <
                ))}
            </div>
        )
    }

}
