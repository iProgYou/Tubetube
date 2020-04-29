import React from 'react';
import UserInfo from './user_info';
import { Link } from 'react-router-dom';

const UserNav = ({ currentUser,logout }) => {
    // console.log(currentUser)
    const content = currentUser ? (
        <UserInfo logout={logout} currentUser={currentUser}/>        
    ) : (
        <Link to="/signin">Sign In</Link>
    )
    return <>{content}</>
}

export default UserNav;