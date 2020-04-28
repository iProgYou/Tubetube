import React from 'react';
import { Link } from "react-router-dom";
import styles from '../nav_bar.module.css';


const UserInfo = ({currentUser,logout}) => (
    <div>
        <h3>{currentUser.username}</h3>
        <p>{currentUser.email}</p>
        <Link onClick={logout} to="/">Sign Out</Link>
    </div>
)

export default UserInfo;