import userActiontypes from './userActionTypes'

export const setCurrentUser = user => {
    return {
        type: userActiontypes.SET_CURRENT_USER,
        payload: user
    }
}