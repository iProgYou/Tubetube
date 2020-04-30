import React from 'react';
import { Link } from 'react-router-dom';

import styles from './session.module.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            username: "",
            // errors: this.props.errors
        }
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleChange(inputType) {
        return e => (
            this.setState({
                [inputType]: e.target.value
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.props)
        let user = Object.assign({},this.state);
 
        this.props.action(user)
            .then(() => {
                // console.log('made it to the then in handle submit')
                // need to redirect to app here
                this.props.history.replace('/')
            }).fail(() => {
                this.setState({
                    email: "",
                    password: "",
                    username: ""
                })
            });
    }

    // ghostTyping() {
    //     // console.log(this.emailInput.value);
    //     // console.log(this.passwordInput.value);
    //     // this.emailInput.value = "asdflkjasdlkfjasdkfj"
    //     // console.log(email);
    //     // console.log(password);

  
        
    //     let ei = 0;
    //     const typeEmail = () => {
    //         if (ei <= user.email.length) {
    //             console.log("here")
    //             this.emailInput.value = user.email.substr(0,ei++)
    //             setTimeout(() => {
    //                 return typeEmail()
    //             },30)
    //         } else {
    //             console.log("while")
    //         }
    //     }



        // email.split().forEach(char => {
            
        //     word += char;

        //     setTimeout(() => {
        //         // this.emailInput.value += char
        //         this.setState({
        //             email: word
        //         })
        //     },300)
        // })

        // word = "";

        // password.split().forEach(char => {
        //     setTimeout(() => {
        //         // this.passwordInput.value += char
        //         this.setState({
        //             email: word
        //         })
        //     },300)
        // })
    // }

    handleDemo() {
        // e.preventDefault()

        let user = {
            email: "demo@demo.com",
            password: "123456",
            username: "Demo"
        }

        this.props.action(user)
            .then(() => {
                // console.log('made it to the then in handle submit')
                // need to redirect to app here
                this.props.history.replace('/')
            })
    }

    renderErrors() {
        return (
            <ul className={styles.errors}>
                {this.props.errors.map((error,i) => (
                <li key={i}>{error}</li>
                ))}
            </ul>
            )
    }

    componentWillUnmount() {
        this.props.clearErrors();
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
                <Link to="/signup">Create Account</Link>
                <button type="button" onClick={() => this.handleDemo()}>Demo</button>
                {/* <button type="button" onClick={() => this.ghostTyping()}>Demo</button> */}
                <button>Next</button>
            </div>
        ) : (
            <div className={styles.buttonContainer}>
                <Link to="/signin">Sign In instead</Link>
                <button>Next</button>
            </div>
        )

        const header = formType === "Sign In" ? "Sign in" : "Create Your Account"

        const inputClass = formType === "Create Account" ? styles.threeInputContainer : styles.twoInputContainer

        return(
            <div className={styles.fullscreen}>
                <div className={styles.container}>
                <img className="med-logo" src={window.logoURL} />                    
                <h3 className={styles.header}>{header}</h3>
                    <p className={styles.subHead}>to continue to Tubetube</p>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className={inputClass}>
                            {usernameInput}
                            <input
                                ref={node => this.emailInput = node}
                                type="text" 
                                placeholder="Email"
                                value={email}
                                onChange={this.handleChange("email")}
                            />
                            <input 
                                ref={node => this.passwordInput = node}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange("password")}
                            />
                        </div>
                        {this.renderErrors()}
                        {buttonContainer}
                    </form>
                </div>
            </div>
        )
    }

};

export default SessionForm;