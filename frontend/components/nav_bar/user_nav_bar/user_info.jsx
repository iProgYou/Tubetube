import React from 'react';
import { Link } from "react-router-dom";
import styles from '../nav_bar.module.css';

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownDisplay: false
        }
    }

    
    render() {
        const { dropdownDisplay } = this.state;

        const content = dropdownDisplay ? (
            <div>clicked</div>
        ) : (
            <div>not clicked</div>
        )
        
        return(
            <div>
                <h3>{currentUser.username}</h3>
                <p>{currentUser.email}</p>
                <Link onClick={logout} to="/">Sign Out</Link>
            </div>
        )
    }
}

export default UserInfo;