import { SHOW_MENU } from '../actions/actions'

const apps = (state = [], action) => {
    if (!action || !action.type )
    {
        return state;
    }

    let newState;

    switch(action.type)
    {
        case SHOW_MENU:
            newState = state;
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}

export default apps;
