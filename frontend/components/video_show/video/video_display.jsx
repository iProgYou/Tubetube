import React from 'react';
import styles from './video_display.module.css';
import { Player } from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css"; // import css
import { Link } from 'react-router-dom';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.parseDate = this.parseDate.bind(this);
    }

    parseDate() {
        if(!this.props.currentVideo.createdAt) return null;
        console.log(this.props.currentVideo)
        let date = this.props.currentVideo.createdAt.slice(0,10).split('-')
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        let currentMonth = month[parseInt(date[1]) - 1]
        let currentDay = parseInt(date[2]).toString()
        let newDate = `${currentMonth} ${currentDay}, ${date[0]}`
        return newDate
    }

    render() {
        const { currentVideo } = this.props;
        const titleEdit = this.props.hasEditPowers ? (
            <div className={styles.titleEdit}>
                <h3 className={styles.head}>{currentVideo.title}</h3>
                <Link className={styles.titleEditButton} to={`/edit/${currentVideo.id}`}><button>Edit Video</button></Link>
            </div>
        ) : (
            <h3 className={styles.head}>{currentVideo.title}</h3>
        )
        const parsedDate = this.parseDate()
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
                <div className={styles.textBox}>
                    <div className={styles.top}>
                        {titleEdit}
                        <div className={styles.viewDate}>
                            <p>{currentVideo.plays} views</p>
                            <p>•</p>
                            <p>{parsedDate}</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className="biggerIcon">{currentVideo.creator[0].toUpperCase()}</div>
                        <div>
                            <p>{currentVideo.creator}</p>
                            <p>{currentVideo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default VideoDisplay;

