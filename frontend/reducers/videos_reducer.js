import { RECEIVE_VIDEOS,RECEIVE_VIDEO,REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = (state = {},action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            
        default:
            return state;
    }
}

export default videosReducer;