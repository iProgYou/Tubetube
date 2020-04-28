import React from 'react';
import { Link } from 'react-router-dom';

import styles from './session.module.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
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
        this.props.signin(user)
            .then(res => {
                
                this.setState({
                    email: "",
                    password: ""
                })
            });
    }

    renderErrors() {
        return this.props.errors.map((error,i) => <li key={i}>{error}</li>)
    }

    render() {

        const { email,password } = this.state;

        return(
            <div className={styles.fullscreen}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>Tubetube</h1>
                    <h3 className={styles.header}>Sign in</h3>
                    <p className={styles.subHead}>to continue to Tubetube</p>
                    <form className={styles.inputs} onSubmit={e => this.handleSubmit(e)}>
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
                        <button className={styles.nextButton}>Next</button>
                    </form>
                    {this.renderErrors()}
                    <Link className={styles.link} to="/signup">Create Account</Link>
                </div>
            </div>
        )
    }

};

export default LoginForm;