import React from 'react';
import styles from './video_form.module.css'
import { BsCameraVideoFill } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';



class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            creator_id: undefined,
            thumbnailFile: null,
            thumbnailUrl: null,
            videoFile: null,
            videoUrl: null
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            title: this.props.video.title,
            description: this.props.video.description,
            creator_id: this.props.video.creator_id,
            thumbnailFile: this.props.video.thumbnailFile,
            thumbnailUrl: this.props.video.thumbnailUrl,
            videoFile: this.props.video.videoFile,
            videoUrl: this.props.video.videoUrl,
        })
    }

    handleChange(inputType) {
        return (e) => {
            // let temp = {...this.state};
            // temp[inputType] = e.target.value
            this.setState({
                [inputType]:e.currentTarget.value
            })
        }
    }
    

    handleFile(inputType) {
        let inputUrl = inputType.slice(0,-4) + "Url"
        return (e) => {
            console.log(e.currentTarget.files[0])
            console.log(this.state)
            // this.setState({
            //     [inputType]:e.currentTarget.files[0]
            //     // videoFile:e.currentTarget.files[0]
            // })
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                // let temp = {...this.state};
                // temp[inputType] = file;
                // temp[inputUrl] = fileReader.result
                this.setState({
                    [inputType]: file,
                    [inputUrl]: fileReader.result 
                })
            }
            // debugger
            if (file) {
                fileReader.readAsDataURL(file);
            }
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
        console.log(this.state)
        const formData = new FormData();
        if (this.props.match.params.videoId) {
            formData.append('video[id]',this.props.match.params.videoId)
        }
        if (this.state.thumbnailFile) formData.append('video[thumbnail]',this.state.thumbnailFile);
        if (this.state.videoFile) formData.append('video[video_file]',this.state.videoFile);
        if (this.state.title) formData.append('video[title]',this.state.title);
        formData.append('video[description]',this.state.description)

        this.props.action(formData,this.props.match.params.videoId)
            .then((res) => {
                // this.props.history.replace('/video')
                if (this.props.formType === "Update Form") {
                    console.log(this.props.match.params.id)
                    this.props.history.replace(`/video/${this.props.match.params.id}`)
                } else {
                    console.log(res)
                    this.props.history.replace(`/video/${res.video.id}`)
                }
            })
            .fail(() => {
                console.log('baddddddddddd')
            })
    }

    render() {
        console.log(this.state);
        // console.log(this.props);
        // debugger

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

        const imgPreview = this.state.thumbnailUrl ? <img src={this.state.thumbnailUrl}/> : <div>No image for some reason</div>;

        if (!this.state) return null;
        return(
            <div className={styles.videoFormContainer}>
                <form className={styles.videoForm} onSubmit={this.handleSubmit}>
                    <h2 className={styles.head}>{this.props.formType}</h2>
                    <div className={styles.fileInputs}>
                        <label htmlFor="video-form-video-upload" className={styles.uploadIcon}>
                            <BsCameraVideoFill 
                                size={60}
                            />
                            <input 
                                id="video-form-video-upload"
                                className={styles.inputClass}
                                type="file"
                                accept="video/*"
                                onChange={this.handleFile('videoFile')}
                                // value= ""// {this.state.video.videoFile ? this.state.video.videoFile : ""}
                            />
                        </label>
                        <label htmlFor="video-form-video-upload" className={styles.uploadIcon}>
                            <AiFillCamera 
                                size={60}
                            />
                            <input 
                                className={styles.inputClass}
                                type="file"
                                accept="image/*"
                                placeholder=""
                                onChange={this.handleFile('thumbnailFile')}
                                // value=""// {this.state.video.thumbnailFile ? this.state.video.thumbnailFile : ""}
                            />
                        {/* {imgPreview} */}
                        </label>
                    </div>
                    <div className={styles.textInput}>
                        <input 
                            type="text"
                            className={styles.title}
                            placeholder="Title"
                            onChange={this.handleChange('title')}
                            value={this.state.title}
                        />
                        <textarea 
                            className={styles.description}
                            placeholder="Description"
                            onChange={this.handleChange('description')}
                            value={this.state.description}
                        />
                    </div>
                    {formButtons}
                </form>
            </div>
        )
    }
};

export default VideoForm;