import React from 'react';
import UserNavContainer from "./user_nav_bar/user_nav_conatiner";
import LogoNav from "./logo_nav_bar/logo_nav";
import SearchNavContainer from "./search_nav_bar/search_nav_container"
import { Route } from 'react-router-dom';
import styles from './nav_bar.module.css';
import SideBar from './sidebar/sidebar'


const NavBar = () => (
    <div>
        <div className={styles.navContainer}>
            <LogoNav />
            <SearchNavContainer />
            <UserNavContainer />
        </div>
        <SideBar  /> 
        {/* expanded={this.state.expanded} */}
    </div>

)

export default NavBar;