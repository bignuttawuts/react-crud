import axios from 'axios';

export const GET_DOCUMENT = '[DOCUMENT APP] GET_DOCUMENT';
export const SAVE_DOCUMENT = '[DOCUMENT APP] SAVE_DOCUMENT';

export function getDocument(documentId) {
    return function (dispatch) {
        const request = axios.get(`http://localhost:3001/documents/${documentId}`);
        return request.then((response) => {
            dispatch({
                type: GET_DOCUMENT,
                payload: response.data
            })
        }
        );
    }
}

export function saveDocument(document) {
    const request = document.id === '' ?
        axios.post('http://localhost:3001/documents', document)
        :
        axios.patch(`http://localhost:3001/documents/${document.id}`, document)

    return (dispatch) =>
        request.then((response) => {
            dispatch({
                type: SAVE_DOCUMENT,
                payload: response.data
            })
        })
}

export function newDocument() {
    const data = {
        id: '',
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        isDeleted: false
    }

    return {
        type: GET_DOCUMENT,
        payload: data
    }
}