import React from 'react';
import VideoDisplay from './video/video_display'
class VideoShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // this.props.fetchVideos()
        // debugger
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render() {
        // debugger
        console.log(this.props)
        if (!this.props.currentVideo) return null;
        return (
            <div>
                <VideoDisplay 
                    currentVideo={this.props.currentVideo}
                />
                {/* <Comments />
                <Reccomended /> */}
            </div>
        )
    }

}

export default VideoShow;