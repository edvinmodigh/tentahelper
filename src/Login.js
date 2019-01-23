import React, {Component} from 'react';

import logo from './logo.svg';
import './Login.css';
import auth from './firebase'
import App from './App'

export const logoutUser = () => {
    auth().signOut()
}

const FBprovider = new auth.FacebookAuthProvider()
auth().setPersistence(auth.Auth.Persistence.SESSION)


export default class Login extends Component {

    state = {
        user: auth().currentUser,
        loading: true
    };

    loginFB = () => {
        auth().signInWithPopup(FBprovider)
            .then(({user}) => {
                this.setState({user})
            })
    };

    componentDidMount() {
        this.setAuthObserver();
    }

    setAuthObserver() {
        return auth().onAuthStateChanged(user => this.setState({user, loading: false}));
    }

    render() {
        const {user} = this.state;
        if (this.state.loading) {
            return null;
        }

        if (user) {
            return (
                <div>
                    <App user={user}/>
                </div>
            )
        } else {
            return ( <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Not logged in - Please use your Facebook account to login
                    </p>
                    <button onClick={() => {
                        this.loginFB()
                    }}  class="loginBtn loginBtn--facebook">
                        Login with Facebook
                    </button>

                </header>
            </div>)
        }

    }
}

