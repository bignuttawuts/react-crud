const initialState = {
    data: [],
    entities: [{
        type: 'new',
        props: {
            open: false
        },
        data : null,
        field1: 'a',
        field2: 'a',
        field3: '0',
        field4: '0'
    }],
    documentDetail: {
        type: 'new',
        props: {
            open: false
        },
        data : null,
        field1: 'www',
        field2: 'aaa',
        field3: '0',
        field4: '0'
    }
}

const documents = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DOCUMENT':
            return {
                ...state,
                entities: [
                    ...state.entities,
                    {
                        id: action.id,
                        field1: action.field1,
                        field2: action.field2,
                        field3: action.field3,
                        field4: action.field4,
                        isDeleted: false
                    }
                ]
            }
        case 'DELETE_DOCUMENT':
            return {
                ...state,
                entities: [
                    ...state.entities.map(document =>
                        (document.id === action.id) ?
                            { ...document, isDeleted: true }
                            : document
                    )
                ]
            }
        case 'GET_DOCUMENT':
            console.log(state.entities, action.id)
            return {
                ...state,
                entities: [
                    ...state.entities
                ],
                documentDetail: state.entities.find((document) => document.id === +action.id) || initialState.documentDetail
            }
        case 'OPEN_EDIT_DOCUMENT':
            return {
                ...state,
                documentDetail: {
                    type: 'edit',
                    props: {
                        open: true
                    },
                    data: action.data
                }
            }
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
