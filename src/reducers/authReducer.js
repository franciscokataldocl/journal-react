
import { types } from '../types/types';


export const authReducer = (state = {}, action) => {

    //actions
    switch (action.type) {
        //case 1
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        //case 1
        case types.logout:
            return {}
        //case default
        default:
            return state;
    }
}


