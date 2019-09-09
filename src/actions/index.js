let nextDocumentId = 1;

export const addDocument = (document) => {
    return {
        type: 'ADD_DOCUMENT',
        id: nextDocumentId++,
        ...document
    }
}
