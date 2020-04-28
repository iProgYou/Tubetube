import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return(
            <div>
                <h1>Sign in</h1>
                <form>
                    <label>Email
                        <input type="email" />
                    </label>
                </form>
                <Link to="/signup">Create Account</Link>

            </div>
        )
    }

};

export default LoginForm;