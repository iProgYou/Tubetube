import React from 'react';
import VideoDisplay from './video/video_display'
class VideoShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render() {
        console.log(this.props)
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