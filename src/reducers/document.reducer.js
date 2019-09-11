import * as Actions from '../actions';

const initialState = {
    data: null,
    itemDialog: { isOpen: false }
};

const documentReducer = function (state = initialState, action) {
    console.log('state', state)
    switch (action.type) {
        case Actions.GET_DOCUMENT:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        case Actions.SAVE_DOCUMENT:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        default:
            {
                return state;
            }
    }
}

export default documentReducer;
