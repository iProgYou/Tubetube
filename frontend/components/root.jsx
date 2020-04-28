import React from 'react';
import { Provider } from 'react-redux';
import App from './app/app';
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute } from '../util/route_util';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <App /> */}
            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/signin" component={LoginFormContainer}/>

                {/* <Route exact path="/signup" component={SignupFormContainer}/>
                <Route exact path="/signin" component={LoginFormContainer}/> */}
                <Route path="/" component={App}></Route>
            </Switch>
        </HashRouter>
    </Provider>
)

export default Root;