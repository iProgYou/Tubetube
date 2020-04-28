import React from 'react';
import UserInfo from './user_info';
import { Link } from 'react-router-dom';
import styles from '../nav_bar.module.css';

const UserNav = ({ currentUser,logout }) => {
    console.log(currentUser)
    const content = currentUser ? (
        <UserInfo logout={logout} currentUser={currentUser}/>        
    ) : (
        <Link className={styles.link} to="/signin">Sign In</Link>
    )
    return <>{content}</>
}

export default UserNav;