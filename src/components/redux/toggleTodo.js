
export const toggleTodo = (id) =>{
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVATE: 'SHOW_ACTIVATE'
}
