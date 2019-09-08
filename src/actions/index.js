let nextTodoId = 0

export const addTodo = text => {
    return {
        type: 'ADD_DOCUMENT',
        id: nextTodoId++,
        text
    }
}
