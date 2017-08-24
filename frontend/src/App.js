import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

//Gives App the ability to have onpage links
import {Link} from 'react-router';


//Request
import request from 'request'

//Import AntDesign Components
import Menu, {SubMenu, MenuItem} from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Avatar from 'antd/lib/icon';

//Import AntDesign Layout
import Layout from 'antd/lib/layout';
//Import Auth0 Login and Login Check
import { login, logout, isLoggedIn, getAccessToken } from './utils/AuthService';
//More AntDesign Layout
const { Header, Footer, Sider, Content } = Layout;



class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Project Title',
            titleClicked: false,
            currentPage: 'main',
            userData: {},
            currentUser: null,
            name: ''
        };

        this.newHeader = this.newHeader.bind(this);
        this.showTitleClick = this.showTitleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.newCurrentPage = this.newCurrentPage.bind(this);
        this.setUserData = this.setUserData.bind(this);
        this.dataUpdate = this.dataUpdate.bind(this);
        this.setCurrentFile = this.setCurrentFile.bind(this);
        this.clearDocument = this.clearDocument.bind(this);
    }

    newHeader(input) {
        this.setState({title: input})

    }

    clearDocument() {
        console.log('app level cleared');
        this.setState({
            currentDocument: null,
            outputForMain: null,
            title: 'Project Title'
        });
    }

    newCurrentPage(inputPage) {
        this.setState({currentPage: inputPage})
    }

    setUserData (userDataObject) {
        this.setState({userData: userDataObject})
    }

    showTitleClick() {
        if (this.state.title === 'Project Name') {
            this.setState({
                titleClicked: !this.state.titleClicked,
                title: ''
            });
        } else {
            this.setState({titleClicked: !this.state.titleClicked});
        }

    }

    handleKeyPress(target) {
        if(target.charCode==13){
            this.setState({titleClicked: !this.state.titleClicked});
        }
    }

    dataUpdate() {
        if (isLoggedIn()) {
            let userD = sessionStorage.getItem('userData');
            console.log(userD);

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
                this.setState({currentUser: body.sub, name: body.name})

                let options = {
                    url: 'http://myjscookbook.com/userInfo/' + body.sub,
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                }
                request.get(options, (error, response, body) => {
                    console.log('Request for userdata from server');
                    console.log('error:', error); // Print the error if one occurred
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    console.log('body:', body); // Print the HTML for the Google how
                    // Makes Body an Object
                    body = JSON.parse(body);
                    body = body.user_metadata;
                    body = JSON.stringify(body)
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
                    console.log(body);
                    let bodyObject = {};

                    if (shouldParse){
                        bodyObject = JSON.parse(body)
                    } else {
                        bodyObject = body;
                    }

                    console.log('bodyObject');
                    console.log(bodyObject);
                    //Problem Code
                    this.setUserData(bodyObject)
                })
            });
        }
    }

    setCurrentFile(e, fileName, file) {
        this.setState({
            currentDocument: fileName,
            outputForMain: file,
            title: fileName
        })

    }

//DEAR SHANE
// PLEASE MOVE output to app state. Should have remembered the topDown design pattern my friend.
// It's a bitch. But, app should know all these things. This is an app afteral, not just a form. Try to keep as little
// as possible in child states I guess. You're never quite sure when you'll need to access a peice of a data from a different location.
        // this.setState({
        //     currentDocument: fileName,
        //     output: file
        // })





    componentWillMount() {
        // If Logged In Makes Requests for Data
        // this.dataUpdate()

            // else {
            //     let currentSession = sessionStorage.getItem('userData');
            //     let userObject = {}
            //     userObject.name = currentSession.name;
            //     this.setUserData(userObject)
            // }
        }

    render() {

        let titleElement = (<h1 id='title'>defaultext</h1>)
        if (this.state.currentPage === 'main') {
            if (this.state.titleClicked === false) {
                titleElement = (<h1 onClick={() => {this.showTitleClick()}} id='title'>{'JSCookbook | ' + [this.state.title]}</h1>)
            }
            else {
                titleElement = (<div><h1 id='title'>JSCookbook | </h1><input autoFocus onBlur={() => {this.showTitleClick()}} id='title-input' value={this.state.title} onKeyPress={this.handleKeyPress} onChange={(e) => {this.setState({title: e.target.value})}}></input></div>)
            }
        }
        else if (this.state.currentPage === 'login') {
            titleElement = (<h1 id='title' style={{textAlign: 'center'}}>My JSCookbook</h1>)
        }
        else if (this.state.currentPage === 'documents') {
            titleElement = (<h1 id='title' style={{textAlign: 'center'}}>My Documents</h1>)
        }



        return (
            <div className="App">
                <Layout style={{height: "100%"}}>
                    <Sider style={(this.state.currentPage === 'login') ? {'display': 'none'} : {}}>
                        <Sidebar currentPage={this.state.currentPage} name={this.state.name} userData={this.state.userData} />
                    </Sider>
                    <Layout>
                        <Header>
                            {titleElement}
                        </Header>
                        <Content>{React.cloneElement(this.props.children, {currentDocument: this.state.currentDocument, outputFromApp: this.state.outputForMain, currentPage: this.newCurrentPage, clearDocument: this.clearDocument, setUserData: this.setUserData, userData: this.state.userData, currentUser: this.state.currentUser, docTitle: this.state.title, dataUpdate: this.dataUpdate, name: this.state.name, setCurrentFile: this.setCurrentFile})}</Content>
                    </Layout>
                </Layout>

            </div>
        );
    }
}

//Sider
class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'workspace',
            collapsed: 'true'
        };

        // Bindings
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick (e) {
        this.setState({
            current: e.key,
        });
    }


    render() {
        console.log(this.props.userInfo);

        return(
            <Menu
                theme='dark'
                mode='inline'
                style={{ height: "100%" }}
                selectedKeys={[this.props.currentPage]}

                id="sidebar"
                inlineColapsed='true'
            >
                <Avatar type="user" id="userPhoto"/>
                <h4>Welcome Back</h4>
                <h2 className='sidebarName'>{this.props.name}</h2>

                <Menu.Item key="main">
                    <Link to="/main"><Icon type="code" />Main Canvas</Link>
                </Menu.Item>
                <Menu.Item key="documents">
                    <Link to="/documents">Documents</Link>
                </Menu.Item>
                <Menu.Item key="logout" onClick={() => logout()}>
                    <p onClick={() => logout()}>Logout</p>
                </Menu.Item>
            </Menu>


        );
    }

}

export default App;
