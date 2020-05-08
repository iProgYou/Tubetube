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
                    // onClick affects UI slice of state
                    className={styles.hamburgerToggle}
                    size={24}
                />
                <Link to="/">
                    <img className="small-logo" src={window.logoURL} />                    
                </Link>
            </div>
            
        )
    }
}
export default LogoNav;