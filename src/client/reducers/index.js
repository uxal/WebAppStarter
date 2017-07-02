/**
 * This file combines all reducers
 */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    state: (state = {}) => state
});

export default rootReducer;