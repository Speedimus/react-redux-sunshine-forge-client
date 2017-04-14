import { combineReducers } from 'redux'
import spaces from './reducerSpaces'
import spaceForm from './reducerSpaceForm'

const reducers = combineReducers(
    {
        spaces: spaces,
        spaceForm: spaceForm
    }
);

export default reducers
