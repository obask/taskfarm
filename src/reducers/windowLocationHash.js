const windowLocationHash = (state = "", action) => {
    switch (action.type) {
        case 'HASH_CHANGE':
            return action.locationHash
        default:
            return state
    }
}

export default windowLocationHash
