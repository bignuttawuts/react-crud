import * as Actions from '../actions';

const initialState = {
    data: null
};

const documentReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_DOCUMENT:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        default:
            return state
    }
}

export default documentReducer;
