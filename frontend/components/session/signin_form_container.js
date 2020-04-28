import LoginForm from './session_form';
import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: "Sign In" 


})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)