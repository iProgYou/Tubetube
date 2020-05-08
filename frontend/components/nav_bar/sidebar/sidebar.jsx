import React from 'react';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { BsCameraVideoFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SideBar = props => {

    const sidebarContent = props.expanded ? (
        <div></div>
    ) : (
        <section className={styles.sidebar}>
            <ul className={styles.unexpandedList}>
                <li><Link className={styles.sidebarLinks} to="/">
                    <MdHome
                        className="icon"
                        size={25}
                    />
                    <p>Home</p>
                </Link></li>
                <li><Link className={styles.sidebarLinks} to="/upload">
                    <BsCameraVideoFill 
                        size={25}
                        className="icon"
                    />
                    <p>Upload</p>
                </Link></li>
                <li><a className={styles.sidebarLinks} href="https://www.linkedin.com/in/zachary-barbieri-040277198/">
                    <AiFillLinkedin 
                        size={25}
                        className="icon"
                    />
                    <p>Linkedin</p>
                </a></li>
                <li><a className={styles.sidebarLinks} href="https://github.com/iProgYou">
                    <AiFillGithub 
                        size={25}
                        className="icon"
                    />
                    <p>Github</p>
                </a></li>
                {/* <li><Link to="/">Author</Link></li> */}
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