let nextTodoId = 0

export const addDocument = text => {
    return {
        type: 'ADD_DOCUMENT',
        id: nextTodoId++,
        text
    }
}
