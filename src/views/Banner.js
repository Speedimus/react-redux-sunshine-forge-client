import React, {Component} from 'react';
import logo from '../logo.svg';

class Banner extends Component {
    render() {
        return (
        <div id="banner" className="banner">
            <div className="App-header">
                {/*<Menu />*/}
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Sunshine Forge</h2>
            </div>
        </div>
        );
    }
}

export default Banner;
