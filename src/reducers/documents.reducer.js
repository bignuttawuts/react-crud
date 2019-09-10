
const initialState = {
    data: []
}

const documents = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DOCUMENTS':
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

export default documents
