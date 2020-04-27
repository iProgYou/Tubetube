import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// --test
import { login,logout,signup } from "./actions/session_actions";
// --test

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // --test
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    // 
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    // --test

    ReactDOM.render(<Root store={store}/>, root);
})