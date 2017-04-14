import React, { Component } from 'react';
import { CREATE_SPACE } from '../actions/actions';
import { connect } from 'react-redux';

class Menu extends Component {
    menuItemArray( menuItems ) {
        return menuItems.map((item, i) => {
            return (
                <li key={i} id={`menuItem${i}`} className="menuItem">
                    <a id="textName" href={item.target}>{item.caption}</a>
                </li>
            )
        })
    }

    render() {
        const { menuItems } = this.props

        return (
            <ul id="menu" className="menu">
                {this.menuItemArray( menuItems )}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menuItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSpaceHandler: (event) => { dispatch( { type: SHOW_MENU } ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
