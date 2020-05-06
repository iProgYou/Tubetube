import { RECEIVE_VIDEOS,RECEIVE_VIDEO,REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = (state = {},action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return Object.assign({},state,action.videos)
        case RECEIVE_VIDEO:
            return Object.assign({},state,{[action.video.id]:action.video})
        case REMOVE_VIDEO:
            let newState = Object.assign({},state)
            delete newState[action.videoId]
            return newState
        // case RECEIVE_COMMENTS:
        //     return Object.assign({},state,{comment_ids: Object.keys(action)})
        // I dont think I need this because it will come preloaded with all the comment ids already
        // case RECEIVE_COMMENT:

        // case REMOVE_COMMENT:

        //  I dont think i need to do all this because I can just fetch comments after component did update
        default:
            return state;
    }
}

export default videosReducer;