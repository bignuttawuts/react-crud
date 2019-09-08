const documents = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DOCUMENT':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default documents
