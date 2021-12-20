import {types} from '../actions/types';

const initialState = {count: 0, msg: 'hi'};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_NUMBER: {
            const {payload} = action;
            return {
                ...state,
                count: state.count + payload
            }
        }
        case types.REMOVE_NUMBER: {
            const {payload} = action;
            return {
                ...state,
                count: state.count - payload
            }
        }
        default:
            return state;
    }
}