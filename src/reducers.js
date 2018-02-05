import {
    applyMiddleware,
    combineReducers,
} from 'redux';

export const me = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_ME':
            return action.me;
        case 'CLOSE_ME':
            return {};
        default:
            return state;
    }
};

export const reducers = combineReducers({
    me,
});
