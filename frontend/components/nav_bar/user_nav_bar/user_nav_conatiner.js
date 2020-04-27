import { connect } from 'react-redux';
import UserNav from './user_nav';
import { logout } from '../../../actions/session_actions';

const mapSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const maptDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapSTP,maptDTP)(UserNav);
