import React from 'react';
import VideoDisplay from './video/video_display'
import styles from './video_show.module.css';
import CommentIndex from './comments/comment_index';
import ReccomededIndex from './reccomended/reccomended_index';

class VideoShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
        // this.props.fetchComments(this.props.currentVideo.id)
    }

    render() {
        // debugger
        if (!this.props.currentVideo) return null;
        return (
            <div className={styles.displayContainer}>
                <div className={styles.backdrop}>
                    <VideoDisplay 
                        currentVideo={this.props.currentVideo}
                        hasEditPowers={ this.props.hasEditPowers }
                    />
                    <CommentIndex 
                        comments={this.props.comments}
                        fetchComments={this.props.fetchComments}
                        currentVideo={this.props.currentVideo}
                        currentUser={this.props.currentUser}
                        users={this.props.users}
                        createComment={this.props.createComment}
                        fetchVideo={this.props.fetchVideo}
                    />
                </div>
                <div className={styles.reccomended}>
                    {/* <div>YOOOOOOOO Related vids</div> */}
                    <ReccomededIndex 
                        relatedVideos={this.props.relatedVideos}
                    />
                </div>
            </div>
        )
    }

}

export default VideoShow;