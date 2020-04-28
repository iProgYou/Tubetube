import React from 'react';
import UserNavContainer from "./user_nav_bar/user_nav_conatiner";
import {Route} from 'react-router-dom';

const NavBar = () => (
    <div>
        {/* <LogoNav /> */}
        {/* <SearchNav /> */}
        <UserNavContainer />

    </div>
)

export default NavBar;