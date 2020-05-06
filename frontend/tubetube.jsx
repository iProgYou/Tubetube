import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// --test
import { login,logout,signup } from "./actions/session_actions";
import { fetchVideo,fetchVideos,deleteVideo } from "./actions/video_actions";
import { fetchComments, createComment, deleteComment } from "./actions/comment_actions";
// --test

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store = configureStore();

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]:window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // --test
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    // 
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.fetchVideos = fetchVideos;
    window.fetchVideo = fetchVideo;
    window.deleteVideo = deleteVideo;
    window.fetchComments = fetchComments;
    window.createComment = createComment;
    window.deleteComment = deleteComment;
    // --test

    ReactDOM.render(<Root store={store}/>, root);
})