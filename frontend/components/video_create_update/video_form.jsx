import React from 'react';
import styles from './video_form.module.css'
import { BsCameraVideoFill } from 'react-icons/bs';


class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: {
                title: "",
                description: "",
                creator_id: undefined,
                thumbnailFile: null,
                videoFile: null
            }
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            video: this.props.video
        })
    }

    handleChange(inputType) {
        return (e) => (
            this.setState({
                [inputType]:e.target.value
            })
        )
    }

    handleFile(inputType) {
        return (e) => {
            console.log(e.currentTarget.files[0])
            console.log(this.state)
            this.setState({
                [inputType]:e.currentTarget.files[0]
                // videoFile:e.currentTarget.files[0]
            })
        }
    }

    handleDelete() {
        // debugger
        this.props.deleteVideo(this.props.match.params.videoId)
            .then(() => {
                this.props.history.replace('/')
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.props.match.params.id) {
            formData.append('video[id]',this.props.match.params.id)
        }
        formData.append('video[title]',this.state.video.title)
        formData.append('video[description]',this.state.video.description)
        formData.append('video[creator_id]',this.props.currentUserId)
        formData.append('video[thumbnail]',this.state.video.thumbnailFile)
        formData.append('video[video_file]',this.state.video.videoFile)
        debugger
        this.props.action(formData)
            .then(() => {
                // this.props.history.replace('/video')
                this.props.history.replace('/')
            })
            .fail(() => {
                console.log('baddddddddddd')
            })
    }

    render() {
        // console.log(this.state);
        // console.log(this.props);
        const { formType } = this.props;
        const formButtons = formType === "Upload Video" ? (
            // need one button here for upload
            <div className={styles.buttonContainer}>
                <button>Upload</button>
            </div>
        ) : (
            // need two buttons, delete and edit
            <div>
                <button type="button" onClick={e => this.handleDelete(e)}>Delete</button>
                <button>Edit</button>
            </div>
        )
        if (!this.state.video) return null;
        return(
            <div className={styles.videoFormContainer}>
                <form className={styles.videoForm} onSubmit={this.handleSubmit}>
                    <h2 className={styles.head}>{this.props.formType}</h2>
                    <div className={styles.fileInputs}>
                        {/* <label for="video-form-video-upload" className={styles.uploadVideoIcon}>
                            <BsCameraVideoFill 
                                size={28}
                                className={styles.uploadIcon}
                            /> */}
                        <input 
                            // id="video-form-video-upload"
                            type="file"
                            accept="video/*"
                            onChange={this.handleFile('videoFile')}
                            value=""
                        />
                        {/* </label> */}
                        
                        <input 
                            type="file"
                            accept="image/*"
                            placeholder=""
                            onChange={this.handleFile('thumbnailFile')}
                            value=""
                        />
                    </div>
                    <div className={styles.textInput}>
                        <input 
                            type="text"
                            className={styles.title}
                            placeholder="Title"
                            onChange={this.handleChange('title')}
                            value={this.state.video.title}
                        />
                        <textarea 
                            className={styles.description}
                            placeholder="Description"
                            onChange={this.handleChange('description')}
                            value={this.state.video.description}
                        />
                    </div>
                    {formButtons}
                </form>
            </div>
        )
    }
};

export default VideoForm;