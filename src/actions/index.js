let nextTodoId = 1;

export const addDocument = text => {
    return {
        type: 'ADD_DOCUMENT',
        id: nextTodoId++,
        text
    }
}
