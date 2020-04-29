import SignUpForm from './session_form';
import { connect } from 'react-redux';
import { signup, receiveErrors } from "../../actions/session_actions";

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: "Create Account"
})

const mapDispatchToProps = (dispatch) => ({
    action: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)