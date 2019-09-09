const documents = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DOCUMENT':
            return [
                ...state,
                {
                    id: action.id,
                    field1: action.field1,
                    field2: action.field2,
                    field3: action.field3,
                    field4: action.field4
                }
            ]
        default:
            return state
    }
}

export default documents
