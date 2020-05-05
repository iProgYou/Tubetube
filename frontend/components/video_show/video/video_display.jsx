import React from 'react';
import styles from './video_display.module.css';
import { Player } from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css"; // import css
import { Link } from 'react-router-dom';


class VideoDisplay extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { currentVideo } = this.props;
        const editLink = this.props.hasEditPowers ? (
            <Link to={`/edit/${currentVideo.id}`}><button>Edit Video</button></Link>
        ) : ("")
        return(
            <div className={styles.videoPage}>
                <Player 
                    className={styles.display}
                    playsInline
                    src={currentVideo.videoUrl}
                    poster={currentVideo.thumbnailUrl}
                    fluid={false}
                    width={1124}
                    height={632}
                    autoPlay={true}
                    // poster={this.props.video}
                />
                {editLink}
            </div>
        )
    }
};

export default VideoDisplay;

