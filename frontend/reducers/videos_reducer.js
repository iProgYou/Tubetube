import { RECEIVE_VIDEOS,RECEIVE_VIDEO,REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = (state = {},action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return Object.assign({},state,action.videos)
        case RECEIVE_VIDEO:
            return Object.assign({},state,{[action.video.id]:action.video})
        case REMOVE_VIDEO:
            let new_state = Object.assign({},state)
            delete new_state[action.videoId]
            return new_state
        default:
            return state;
    }
}

export default videosReducer;