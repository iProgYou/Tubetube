import React from 'react';
import styles from './video_display.module.css';
import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css"; // import css


class VideoDisplay extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props)
        const { currentVideo } = this.props;
        return(
            <div className={styles.videoPage}>
                <Player 
                    playsInline
                    src={currentVideo.videoUrl}
                    // poster={this.props.video}
                />
            </div>
        )
    }
};

export default VideoDisplay;

