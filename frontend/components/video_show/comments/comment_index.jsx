import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchComments(this.props.currentVideo.id)
    }

    render() {
        const { comments, currentVideo } = this.props;
        if (!comments || !currentVideo || !comments[0] ) return null;
        return (
            <div>
                <div>
                    {/* Number of comments? */}
                    <form>

                    </form>
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