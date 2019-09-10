import axios from 'axios';

let nextDocumentId = 1;

export function getDocuments() {
    return function (dispatch) {
        const request = axios.get('http://localhost:3001/documents');
        return request.then((response) => {
            dispatch({
                type: 'GET_DOCUMENTS',
                payload: response.data
            })
        }
        );
    }
}

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

export const openEditDocument = (data) => ({
    type: 'OPEN_EDIT_DOCUMENT',
    data
})
