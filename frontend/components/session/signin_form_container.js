import LoginForm from './signin_form';
import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";

const mapStateToProps = ({errors},ownProps) => ({
    errors: errors.session

})

const mapDispatchToProps = (dispatch,ownProps) => ({
    signin: (user) => dispatch(login(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)