import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import auth from './firebase'


export const logoutUser = () => {
    auth().signOut().then(() => {
        document.location.reload()
    })
}

const FBprovider = new auth.FacebookAuthProvider()
auth().setPersistence(auth.Auth.Persistence.LOCAL)

export default class App extends Component {

    state = {
        user: auth().currentUser
    };

    loginFB = () => {
        auth().signInWithPopup(FBprovider)
            .then(({user}) => {
                this.setState({user})
            })
    };

    render() {
        const {user} = this.state;
        if (user) {
            return (
                <div>
                    Hej {user.displayName}
                </div>
            )
        } else {
            return ( <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Not logged in
                    </p>
                    <button onClick={() => {this.loginFB()}}>Login</button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>)
        }

    }
}

