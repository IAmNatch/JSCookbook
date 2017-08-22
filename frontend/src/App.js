import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

//Gives App the ability to have onpage links
import {Link} from 'react-router';

//Import AntDesign Components
import Menu, {SubMenu, MenuItem} from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Avatar from 'antd/lib/icon';

//Import AntDesign Layout
import Layout from 'antd/lib/layout';
//Import Auth0 Login and Login Check
import { login, logout, isLoggedIn } from './utils/AuthService';
//More AntDesign Layout
const { Header, Footer, Sider, Content } = Layout;



class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Project Name',
            titleClicked: false,
            currentPage: 'main'
        };

        this.newHeader = this.newHeader.bind(this);
        this.showTitleClick = this.showTitleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    newHeader(input) {
        this.setState({title: input})

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



        return (
            <div className="App">
                <Layout style={{height: "100%"}}>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Layout>
                        <Header>
                            {titleElement}
                        </Header>
                        <Content>{this.props.children}</Content>
                    </Layout>
                </Layout>

            </div>
        );
    }
}


// function Topbar() {
//     return (
//         <Menu mode="horizontal" theme="light">
//             <Menu.Item>
//                 <Link to="/main">Back</Link>
//             </Menu.Item>
//             <h1>The JSCookbook</h1>
//         </Menu>)
// };


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


        return(
            <Menu
                theme='dark'
                mode='inline'
                style={{ height: "100%" }}
                selectedKeys={[this.state.current]}
                onClick={this.handleClick}
                id="sidebar"
                inlineColapsed='true'
            >
                <Avatar type="user" id="userPhoto"/>
                <h2>John Smith</h2>
                <h4>Welcome Back</h4>
                <Menu.Item key="workspace">
                    <Link to="/main"><Icon type="code" />Main Canvas</Link>
                </Menu.Item>
                <Menu.Item key="documents">
                    <Link to="/documents">Documents</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                    {
                        (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                    }
                </Menu.Item>
            </Menu>


        );
    }

}

export default App;
