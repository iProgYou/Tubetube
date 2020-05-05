import React from 'react';
import VideoDisplay from './video/video_display'
import styles from './video_show.module.css';

class VideoShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render() {
        if (!this.props.currentVideo) return null;
        return (
            <div className={styles.displayContainer}>
                <div>
                    <VideoDisplay 
                        currentVideo={this.props.currentVideo}
                        hasEditPowers={ this.props.hasEditPowers }
                    />
                    {/* <Comments /> */}
                </div>
                <div>
                {/* <Reccomended /> */}
                </div>
            </div>
        )
    }

}

export default VideoShow;