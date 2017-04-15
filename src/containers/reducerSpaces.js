import { LIST_SPACES, GET_SPACE, DELETE_SPACE, UPDATE_SPACE, CREATE_SPACE } from '../actions/actions'

const spaces = (state, action) => {
    if (!action || !action.type )
    {
        return state;
    }

    let newState;

    switch(action.type)
    {
        case GET_SPACE:
            newState = state;
            break;
        case DELETE_SPACE:
            newState = state;
            break;
        case LIST_SPACES:
            newState = state;
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}

export default spaces;
