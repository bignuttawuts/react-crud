import axios from 'axios';

export const GET_DOCUMENTS = '[DOCUMENT APP] GET_DOCUMENTS';

export function getDocuments() {
    return function (dispatch) {
        const request = axios.get('http://localhost:3001/documents');
        return request.then((response) => {
            dispatch({
                type: GET_DOCUMENTS,
                payload: response.data
            })
        }
        );
    }
}

export function deleteDocument(document) {
    document.isDeleted = true;
    const request = axios.patch(`http://localhost:3001/documents/${document.id}`, document);

    return (dispatch) =>
        request.then((response) => {
            dispatch(getDocuments())
        })
}
