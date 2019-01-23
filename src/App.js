/**
 * Created by edvinmodigh on 2019-01-23.
 */
import React, {Component} from 'react';

import {logoutUser} from './Login'


export default class App extends Component {


    render() {
        const user = this.props.user

        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Tentahelper</a>
                        </div>

                        <ul class="nav navbar-nav navbar-right">
                               <button onClick={() => {
                            logoutUser()
                        }} class="btn btn-danger navbar-btn">Logout
                        </button>
                        </ul>

                    </div>
                </nav>

                Hej {user.displayName}

            </div>
        )

    }
}

