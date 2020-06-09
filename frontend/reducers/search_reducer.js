import { RECEIVE_SEARCH } from '../actions/video_actions';

const defaultSearch = null;

const searchReducer = (state = defaultSearch, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH:
            // debugger
            return Object.keys(action.videos)
        default:
            return state;
    }
}

export default searchReducer;