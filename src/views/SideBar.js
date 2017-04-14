import React, { Component } from 'react';
import { CREATE_SPACE } from '../actions/actions';
import { connect } from 'react-redux';

class SideBar extends Component {
    spaceArray( spaces ) {
        return spaces.map((space, i) => {
            return (
                <div key={i} id={`space${i}`} className="space">
                    <h4 id="textName">{space.name}</h4>
                    <p id="textDisk">{space.disk_quotamb}</p>
                    <p id="textMemory">{space.memory_quotamb}</p>
                </div>
            )
        })
    }

    render() {
        const { spaces, addSpaceHandler } = this.props

        return (
            <div id="sideBar" className="sideBar">
                <div>
                    <button id="addSpace" onClick={addSpaceHandler}>Add Space</button>
                </div>
                <div id="spaces">
                    <h2>spaces</h2>
                    {this.spaceArray( spaces )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spaces: state.spaces
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSpaceHandler: (event) => { dispatch( { type: CREATE_SPACE } ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
