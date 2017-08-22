import React, { Component } from 'react';
import logo from './logo.svg';
import './css/login.css';
import request from 'request';
// Auth0
import { login, logout, isLoggedIn, getAccessToken } from './utils/AuthService';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {

        if (isLoggedIn()) {
            let options = {
                url: 'https://shanerobbins.auth0.com/userinfo',
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }

            request.get(options, function (error, response, body) {
                //CallBack
                console.log('Request for userInfo from auth0');
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google ho
                body = JSON.parse(body)
                let options = {
                    url: 'http://localhost:8080/userInfo/' + body.sub,
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                }
                request.get(options, function (error, response, body) {
                    console.log('Request for userdata from server');
                    console.log('error:', error); // Print the error if one occurred
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    console.log('body:', body); // Print the HTML for the Google how
                })


            });
        }

        return (
            <div id="login-main">
                 {
                    (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                }
            </div>

        );
    }

}

export default Login;
