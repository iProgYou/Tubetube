import React from 'react';
import { Link } from 'react-router-dom';

import styles from './session.module.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            username: ""
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
        // console.log(this.props)
        let user = Object.assign({},this.state);
        // this.setState({
        //     email: "",
        //     password: "",
        //     username: ""
        // })
        this.props.action(user)
            .then(() => {
                // console.log('made it to the then in handle submit')
                // need to redirect to app here
                this.props.history.replace('/')
            });
    }

    renderErrors() {
        return this.props.errors.map((error,i) => <div key={i}>{error}</div>)
    }

    render() {

        const { email,password,username } = this.state;
        const { formType } = this.props;

        const usernameInput = formType === "Create Account" ? (
            <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={this.handleChange("username")}
            />
        ) : ('')

        const buttonContainer = formType === "Sign In" ? (
            <div className={styles.buttonContainer}>
                <Link className={styles.link} to="/signup">Create Account</Link>
                <button>Demo</button>
                <button className={styles.nextButton}>Next</button>
            </div>
        ) : (
            <div className={styles.buttonContainer}>
                <Link className={styles.link} to="/signin">Sign In instead</Link>
                <button>Next</button>
            </div>
        )

        const header = formType === "Sign In" ? "Sign in" : "Create Your Account"

        const inputClass = formType === "Create Account" ? styles.threeInputContainer : styles.twoInputContainer

        return(
            <div className={styles.fullscreen}>
                <div className={styles.container}>
                <img className={styles.logo} src={window.logoURL} />                    
                <h3 className={styles.header}>{header}</h3>
                    <p className={styles.subHead}>to continue to Tubetube</p>
                    <form className={styles.inputs} onSubmit={e => this.handleSubmit(e)}>
                        <div className={inputClass}>
                            {usernameInput}
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
                        </div>
                        {buttonContainer}
                    </form>
                    {this.renderErrors()}
                </div>
            </div>
        )
    }

};

export default SessionForm;