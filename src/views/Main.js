import React, { Component } from 'react';
import SideBar from './SideBar';
import Content from './Content';

class Main extends Component {
    render() {
        return (
        <div id="main" className="main">
            <SideBar />
            <Content />
        </div>
        );
    }
}

export default Main;
