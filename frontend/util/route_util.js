import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Auth routes are routes only non-logged_in users can get to
// Protected routes are routes only logged in users can get to
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Protected = ({ component:Component, path, loggedIn, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
        }
    />
)

const mapSTP = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
    connect(
        mapSTP,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapSTP,
        null
    )(Protected)
);