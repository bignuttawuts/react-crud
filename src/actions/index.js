let nextDocumentId = 1;

export const addDocument = (document) => {
    return {
        type: 'ADD_DOCUMENT',
        id: nextDocumentId++,
        ...document
    }
}

export const deleteDocument = (id) => ({
    type: 'DELETE_DOCUMENT',
    id
})

export const getDocument = (id) => ({
    type: 'GET_DOCUMENT',
    id
})
