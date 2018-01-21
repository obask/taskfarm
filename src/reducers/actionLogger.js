const actionLogger = (state = null, action) => {
    console.log("Action: ", action.type)
    return state
}

export default actionLogger
