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

    
    render() {
        const { dropdownDisplay } = this.state;

        const content = dropdownDisplay ? (
                <div className={styles.dropdown}>
                    <div className={styles.headSection}>
                        <div className={styles.biggerIcon}>{this.props.currentUser.username[0]}</div>
                        <div>
                            <h3>{this.props.currentUser.username}</h3>
                            <p>{this.props.currentUser.email}</p>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <Link onClick={this.handleClick} to="/">
                            <MdHome 
                                size={28}
                                className="icon"
                            />
                            <div>Home</div>
                        </Link>
                        <Link onClick={this.handleClick} to="/">
                            <BsCameraVideoFill 
                                size={28}
                                className="icon"
                            />
                            <div>Upload</div>
                        </Link>
                        <Link onClick={this.props.logout} to="/">
                            <GoSignOut 
                                size={28}
                                className="icon"
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
                <div className={styles.icon} onClick={this.handleClick}>{this.props.currentUser.username[0]}</div>
                {content}
            </div>
        )
    }
}

export default UserInfo;