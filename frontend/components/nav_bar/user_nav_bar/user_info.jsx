import React from 'react';
import { Link } from "react-router-dom";
import styles from './user_dropdown.module.css';
import { MdHome } from 'react-icons/md';
import { GoSignOut } from 'react-icons/go';
import { BsCameraVideoFill } from 'react-icons/bs';


class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownDisplay: false
            // !!!!!!!!!!!!!!!!!! should default to false
        }
        this.handleClick = this.handleClick.bind(this)
        this.dropDisappear = this.dropDisappear.bind(this)
    }

    handleClick() {
        if (this.state.dropdownDisplay) {
            this.setState({
                dropdownDisplay: false
            })
        } else {
            this.setState({
                dropdownDisplay: true
            })
        }
    }

    dropDisappear(e) {
        // console.log("still clickin")
        if (!this.dropdown) return;

        if (this.icon.contains(e.target)) {
            return
        } else if (this.dropdown.contains(e.target)) {
            return
        } else {
            this.setState({
                dropdownDisplay: false
            })
        }
    }
    

    componentDidMount() {
        document.addEventListener('click', this.dropDisappear)
    }

    componentWillUnmount() {
        document.removeEventListener('click',this.dropDisappear)
    }
    // stop propagation react closest
    
    render() {
        const { dropdownDisplay } = this.state;

        const content = dropdownDisplay ? (
                <div ref={node => this.dropdown = node} className={styles.dropdown}>
                    <div className={styles.headSection}>
                        <div className={styles.biggerIcon}>{this.props.currentUser.username[0]}</div>
                        <div>
                            <h3>{this.props.currentUser.username}</h3>
                            <p>{this.props.currentUser.email}</p>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <Link className={styles.link} onClick={this.handleClick} to="/">
                            <MdHome 
                                size={28}
                                className={`icon ${styles.dropdownIcon}`}
                            />
                            <div>Home</div>
                        </Link>
                        <Link className={styles.link} onClick={this.handleClick} to="/">
                            <BsCameraVideoFill 
                                size={28}
                                className={`icon ${styles.dropdownIcon}`}
                            />
                            <div>Upload</div>
                        </Link>
                        <Link className={styles.link} onClick={this.props.logout} to="/">
                            <GoSignOut 
                                size={28}
                                className={`icon ${styles.dropdownIcon}`}
                            />
                            <div>Sign Out</div>
                        </Link>
                    </div>
                </div>
        ) : (
            ""
        )

        // <h3>{this.props.currentUser.username}</h3>
        // <p>{this.props.currentUser.email}</p>
        // <Link onClick={this.props.logout} to="/">Sign Out</Link>

        return(
            <div className={styles.iconContainer} >
                <div ref={node => this.icon = node} className={styles.letterIcon} onClick={this.handleClick}>{this.props.currentUser.username[0]}</div>
                {content}
            </div>
        )
    }
}

export default UserInfo;