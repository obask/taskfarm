export const toggleHashChange = (locationHash) => ({
    type: 'HASH_CHANGE',
    locationHash
})

export const KEY_PRESS = (payload) => ({
    type: 'KEY_PRESS',
    ...payload
})

export const MOVE_FOCUS_NEXT = (payload) => ({
    type: 'MOVE_FOCUS_NEXT',
    ...payload
})

export const MOVE_FOCUS_PREV = (payload) => ({
    type: 'MOVE_FOCUS_PREV',
    ...payload
})

export const SAVE_TODO_TEXT = (payload) => ({
    type: 'SAVE_TODO_TEXT',
    ...payload
})

export const EDIT_TODO_TEXT = (payload) => ({
    type: 'EDIT_TODO_TEXT',
    ...payload
})
