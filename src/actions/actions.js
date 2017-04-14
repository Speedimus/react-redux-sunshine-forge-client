/*
 *  action type constants
 */

export const GET_SPACE          = 'GET_SPACE';
export const CREATE_SPACE       = 'CREATE_SPACE';
export const UPDATE_SPACE       = 'UPDATE_SPACE';
export const DELETE_SPACE       = 'DELETE_SPACE';
export const LIST_SPACES        = 'LIST_SPACES';
export const SHOW_SPACE_FORM    = 'SHOW_SPACE_FORM';

export const GET_APP            = 'GET_APP';
export const CREATE_APP         = 'CREATE__APP';
export const UPDATE_APP         = 'UPDATE_APP';
export const DELETE_APP         = 'DELETE_APP';
export const LIST_APPS          = 'LIST_APPS';

export const SHOW_MENU          = 'SHOW_MENU';

/*
 * action creator functions
 */
// space stuff
export function createSpace(space)
{
    return { type: CREATE_SPACE, space};
}

export function showSpaceForm()
{
    return { type: SHOW_SPACE_FORM };
}

export function updateSpace(space)
{
    return { type: UPDATE_SPACE, space};
}

export function deleteSpace(space)
{
    return { type: DELETE_SPACE, space};
}

export function getSpace(id)
{
    return { type: GET_SPACE, id};
}

export function listSpaces()
{
    return { type: LIST_SPACES};
}

// app stuff
export function createApp(space)
{
    return { type: CREATE_APP, space};
}

export function updateApp(space)
{
    return { type: UPDATE_APP, space};
}

export function deleteApp(space)
{
    return { type: DELETE_APP, space};
}

export function getApp(id)
{
    return { type: GET_APP, id};
}

export function listApps()
{
    return { type: LIST_APPS};
}

export function showMenu()
{
    return { type: SHOW_MENU};
}
