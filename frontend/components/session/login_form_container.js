import SessionForm from './signup_form';
import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";

const mapStateToProps = ({errors},ownProps) => ({
    errors: errors.session,
    formType: "login"

})

const mapDispatchToProps = (dispatch,ownProps) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)