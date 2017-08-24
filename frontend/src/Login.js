import React, { Component } from 'react';
import logo from './logo.svg';
import './css/login.css';
import request from 'request';
// Auth0
import { login, logout, isLoggedIn, getAccessToken } from './utils/AuthService';
//Gives App the ability to have onpage links
import {Link} from 'react-router';
// AntDesign
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
const { Header, Footer, Sider, Content } = Layout;

let LoggedOutHome = (
    <div id='LoggedOutHome'>

    </div>
)

let loginJSX = LoggedOutHome;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
        };


    }

    someFunction(userObject) {
        this.props.setUserData(userObject)
    }

    componentWillMount() {
        // Sets Current Page
        this.props.currentPage('login')
        // If Logged In Makes Requests for Data
        if (isLoggedIn()) {
            let h = sessionStorage.getItem('userData');
            console.log(h);
            if (!sessionStorage.getItem('userData') || h === 'undefined' || h !== this.props.userData) {
                    console.log('ranranran');
                    let options = {
                        url: 'https://shanerobbins.auth0.com/userinfo',
                        headers: {
                            Authorization: `Bearer ${getAccessToken()}`
                        }
                    };
                    request.get(options, (error, response, body) => {
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
                    request.get(options, (error, response, body) => {
                        console.log('Request for userdata from server');
                        console.log('error:', error); // Print the error if one occurred
                        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                        console.log('body:', body); // Print the HTML for the Google how

                        sessionStorage.setItem('userData', body)
                        function isJson(str) {
                            try {
                                JSON.parse(str);
                            } catch (e) {
                                return false;
                            }
                            return true;
                        }
                        let shouldParse = isJson(body)
                        let bodyObject = {};

                        if (shouldParse){
                            bodyObject = JSON.parse(body)
                        } else {
                            bodyObject = body;
                        }

                        let userObject = {};
                        userObject.name = bodyObject.name;
                        console.log('userObject');
                        console.log(userObject);
                        //Problem Code
                        this.props.setUserData(userObject)
                    })
                });
            }
            else {
                let currentSession = sessionStorage.getItem('userData');
                let userObject = {}
                userObject.name = currentSession.name;
                this.props.setUserData(userObject)
            }
        }
    }

    render() {
        return (

            <div id="login-main">
                <div id='LoggedInHome' style={(isLoggedIn() ?  {} : {'display': 'none'})}>
                    <Card title="Welcome" style={{ width: 300, margin: '110px auto' }}>
                        <h2>Welcome back,</h2>
                        <h2>{this.props.userData.name}</h2>
                        <Button type='primary' className='login-button'><Link to="/documents">Proceed to Documents</Link></Button>
                        <Button className="btn btn-danger logout-button" onClick={() => logout()}>Log out </Button>
                    </Card>
                </div>
                <div id='LoggedOutHome' style={(isLoggedIn() ?  {'display': 'none'} : {})}>
                    <Card style={{ width: 350, margin: '110px auto' }}>
                        <h2>Welcome to the JS Cookbook!</h2>
                        <h3>Please log in or sign up to get started!</h3>
                        <Button type='primary' className="btn btn-info login-button" onClick={() => login()}>Log In</Button>
                    </Card>
                </div>
            </div>

        );
    }

}

export default Login;
