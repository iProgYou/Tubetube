import React from 'react';
import UserInfo from './user_info';
import { Link } from 'react-router-dom';
import styles from './user_nav.module.css';
import { MdAccountCircle } from 'react-icons/md';



const UserNav = ({ currentUser,logout }) => {
    // console.log(currentUser)

    // const handleClick = () => {
    //     <Redirect
    // }

    const content = currentUser ? (
        <UserInfo logout={logout} currentUser={currentUser}/>        
    ) : (
        <Link className={styles.signIn} to="/signin">
            <MdAccountCircle 
                size={28}
                className="icon"
            />
            <div>SIGN IN</div>
        </Link>
    )
    return <>{content}</>
}

export default UserNav;

