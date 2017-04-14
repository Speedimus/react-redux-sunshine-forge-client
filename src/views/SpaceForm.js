import React, { Component } from 'react';
import { CREATE_SPACE } from '../actions/actions';
import { connect } from 'react-redux';

class SpaceForm extends Component {
    render() {
        const { space, onDone } = this.props

        return (
            <form id="spaceForm" onSubmit={onDone}>
                <input type="hidden" id="id" defaultValue={space.id} />
                <input type="text" id="spaceName" defaultValue={space.name} />
                <input type="text" id="spaceDisk" defaultValue={space.disk_quotamb}/>
                <input type="text" id="spaceMemory" defaultValue={space.memory_quotamb}/>
                <input type="submit" id="submit" />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        space: state.spaceForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDone: (event) => { dispatch( { type: CREATE_SPACE, event: event } ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceForm);

