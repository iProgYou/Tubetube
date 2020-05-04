import React from 'react';
import styles from './video_form.module.css'

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: {
                title: "",
                description: ""
            }
        }
    }

    handleDelete(e) {

    }

    handleSubmit() {
        this.props.action()
    }

    render() {

        const { formType } = this.props;
        const formButtons = formType === "Upload Video" ? (
            // need one button here for upload
            <button>Upload</button>
        ) : (
            // need two buttons, delete and edit
            <>
                <button onClick={e => handleDelete(e)}>Delete</button>
                <button>Edit</button>
            </>
        )

        return(
            <section className={styles.videoFormContainer}>
                <h2>{this.props.formType}</h2>
                <form className={styles.videoForm} onSubmit={handleSubmit}>
                    <div className={styles.fileInputs}>
                        <input 
                            type="file"
                            accept="video/*"
                        />
                        <input 
                            type="file"
                            accept="video/*"
                        />
                    </div>
                    <input 
                        type="text"
                    />
                    <textarea 

                    />
                    {formButtons}
                </form>
            </section>
        )
    }
};

export default VideoForm;