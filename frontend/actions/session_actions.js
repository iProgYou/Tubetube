import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

// regular actions
export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => (dispatch) => APIUtil.login(user)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))

export const logout = () => (dispatch) => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
    

export const signup = (user) => (dispatch) => APIUtil.signup(user)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
