import React from 'react';
import CommentIndexItem from './comment_index_item';
import styles from './comment.module.css';


class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.currentVideo.id)
    }

    handleChange(e) {
        // console.log("here")
        // return (e) => {
        this.setState({
            body: e.currentTarget.value
        })
        // }
    }

    handleSubmit() {
        // debugger
        let comment = this.state;
        comment.video_id = this.props.currentVideo.id
        this.props.createComment(comment)
        this.setState({
            body: ""
        })
        this.props.fetchVideo(this.props.currentVideo.id)
    }

    handleCancel(e) {
        e.currentTarget.value = ""
        this.setState({
            body: e.currentTarget.value
        })
    }

    render() {
        const { comments, currentVideo, currentUser,users } = this.props;
        if (!comments || !currentVideo ) return null;

        const submitButton = this.state.body.length > 0 ? (
            <button type="submit" className={`button ${styles.submitCommentButton}`}>Submit</button>
            // <input type="submit" className={`button ${styles.submitCommentButton}`} />
        ) : (
            <button onClick={() => {}} className={`button ${styles.submitCommentButtonGrey}`}>Submit</button>
        )

        const commentContent = currentUser ? (
            <div className={styles.createCommentContainer}>
                <div className="biggerIcon">{users[currentUser].username[0].toUpperCase()}</div>
                <form className={styles.commentForm} onSubmit={this.handleSubmit}>
                    <input
                        className={styles.commentInput}
                        type="text"
                        onChange={e => this.handleChange(e)}
                        value={this.state.body}
                        // placeholder="Please sign in to post a public comment..."
                        placeholder="Add a public comment..."
                    />
                    <div className={styles.buttonContainer}>
                        <button onClick={(e) => this.handleCancel(e)} className={`button ${styles.cancelCommentButton}`}>Cancel</button>
                        {submitButton}
                    </div>
                </form>
            </div>
        ) : (
            <div></div>
        )
        console.log(this.state);
        return (
            <div>
                <div>
                    {/* Number of comments? */}
                    <h3 className={styles.numberOfComments}>{Object.values(comments).length} comments</h3>
                    {commentContent}
                </div>
                <div>
                    {comments.map(comment => (
                        <CommentIndexItem 
                            key={ comment.id }
                            comment={ comment }
                        />
                    ))}
                </div>
            </div>
        )
    }
};

export default CommentIndex;