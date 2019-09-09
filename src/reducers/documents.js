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
                    field4: action.field4,
                    isDeleted: false
                }
            ]
        case 'DELETE_DOCUMENT':
            return state.map(document =>
                (document.id === action.id) ?
                    { ...document, isDeleted: true }
                    : document
            )
        case 'GET_DOCUMENT':
            return state.filter(document => (document.id === action.id))
        default:
            return state
    }
}

export default documents

export const getDocumentById = (state, id) => (
    state.documents.find((page) => page.id === +id) || { title: '', content: '' }
)
