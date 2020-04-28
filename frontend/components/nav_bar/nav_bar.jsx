import React from 'react';
import UserNavContainer from "./user_nav_bar/user_nav_conatiner";
import { Route } from 'react-router-dom';
import styles from './nav_bar.module.css';

const NavBar = () => (
    <div className={styles.navContainer}>
        {/* <LogoNav /> */}
        {/* <SearchNav /> */}
        <UserNavContainer />

    </div>
)

export default NavBar;