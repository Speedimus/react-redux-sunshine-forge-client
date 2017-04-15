import { CREATE_SPACE, UPDATE_SPACE } from '../actions/actions'

const spaceForm = (state, action) => {
    if (!action || !action.type )
    {
        return state;
    }

    let newState;

    switch(action.type)
    {
        case CREATE_SPACE:
            console.log( action.event );
            console.log( 'CREATE_SPACE: ', action.event.target );
            console.log( 'CREATE_SPACE: ', action.event.target.spaceForm );
            newState = state;
            break;
        case UPDATE_SPACE:
            newState = state;
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}

export default spaceForm;
