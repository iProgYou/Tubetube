import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo_nav.module.css';

const LogoNav = props => (
    <div className={styles.logoContainer}>
        <Link to="/">
            <img className="small-logo" src={window.logoURL} />                    
        </Link>
    </div>
)

export default LogoNav;