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
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {

    render() {
        return (
            <div className="App">
                <Layout style={{height: "100%"}}>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Layout>
                        <Header>
                            <h1>JSCookbook Project</h1>
                        </Header>
                        <Content>{this.props.children}</Content>
                    </Layout>
                </Layout>

            </div>
        );
    }
}


function Topbar() {
    return (
        <Menu mode="horizontal" theme="light">
            <Menu.Item>
                <Link to="/main">Back</Link>
            </Menu.Item>
            <h1>The JSCookbook</h1>
        </Menu>)
};


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
                    <Link to="/login">Logout</Link>
                </Menu.Item>
            </Menu>


        );
    }

}

export default App;
