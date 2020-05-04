import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo_nav.module.css';
import SideBar from '../sidebar/sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';


class LogoNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }



    render() {
        return (
            <div className={styles.logoContainer}>
                <GiHamburgerMenu
                    // onClick affect expanded
                    className={styles.hamburgerToggle}
                    size={24}
                />
                <Link to="/">
                    <img className="small-logo" src={window.logoURL} />                    
                </Link>
                <div>
                    <SideBar expanded={this.state.expanded} />
                </div>
            </div>
        )
    }
}
export default LogoNav;