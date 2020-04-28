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

    handleChange(inputType) {
        return e => {
            this.setState({
                [inputType]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props)
        let user = Object.assign({},this.state);
        this.props.signup(user);
        this.setState({
            email: "",
            password: "",
            username: ""
        })
    }

    renderErrors() {
        return this.props.errors.map((error,i) => <li key={i}>{error}</li>)
    }

    render() {

        const { email,password,username } = this.state;

        return(
            <div>
                <h1>Create Account</h1>
                <p>to continue to Tubetube</p>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="text" 
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange("username")}
                    />
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange("email")}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange("password")}
                    />
                    <button>Next</button>
                </form>
                {this.renderErrors()}

                <Link to="/signin">Sign in instead</Link>
            </div>
        )
    }
};

export default SignupForm;
