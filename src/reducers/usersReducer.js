import {RECEIVE_CURRENT_USER, RECEIVE_USER} from "../actions/Actions";
import {merge} from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return merge({}, state, { [action.user.id]: action.user });

        default:
            return state;
    }
};