import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <App /> */}
            <Switch>
                <Route path="/signup" component={SignupFormContainer}/>
                <Route path="/signin" component={LoginFormContainer}/>
                <Route path="/" component={App}></Route>
            </Switch>
        </HashRouter>
    </Provider>
)

export default Root;