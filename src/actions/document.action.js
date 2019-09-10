import axios from 'axios';

export const GET_DOCUMENT = '[DOCUMENT APP] GET_DOCUMENT';

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