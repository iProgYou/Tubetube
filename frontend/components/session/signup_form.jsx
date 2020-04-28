import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: ""
        }

    }

    render() {
        return(
            <div>
                <h1>Sign up</h1>
                <Link to="">Sign in instead</Link>
            </div>
        )
    }
};

export default SignupForm;
