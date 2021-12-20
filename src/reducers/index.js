import counterReducer from './counterReducer';
// import todoReducer from './todoReducer';
const { combineReducers } = require("redux");


export const rootReducer = combineReducers({
    count: counterReducer,
    // todo: todoReducer,
})