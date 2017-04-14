import { LIST_APPS, GET_APP, CREATE_APP, UPDATE_APP, DELETE_APP } from '../actions/actions'

const apps = (state = [], action) => {
    if (!action || !action.type )
    {
        return state;
    }

    let newState;

    switch(action.type)
    {
        case GET_APP:
            newState = state;
            break;
        case DELETE_APP:
            newState = state;
            break;
        case UPDATE_APP:
            newState = state;
            break;
        case CREATE_APP:
            newState = state;
            break;
        case LIST_APPS:
            newState = state;
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}

export default apps;
