import React from 'react';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';

const SideBar = props => {

    const sidebarContent = props.expanded ? (
        <div></div>
    ) : (
        <section className={styles.sidebar}>
            <ul className={styles.unexpandedList}>
                <li><Link to="/"></Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/">Github</Link></li>
                <li><Link to="/">Linkedin</Link></li>
                <li><Link to="/">Author</Link></li>
            </ul>
        </section>
    )
    return (
        <>
            {sidebarContent}
        </>
    )
}

export default SideBar