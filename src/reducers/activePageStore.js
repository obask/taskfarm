const _navBarInfoInitialState = {
    items: [
        {
            checked: true,
            submitted: true,
            focus: true,
            text: "1 ollolol njn jn j nj nj nj n j ol"
        },
        {
            checked: true,
            submitted: true,
            focus: false,
            text: "2 ollolol ol m m im km km km km km"
        },
        {
            checked: true,
            submitted: true,
            focus: false,
            text: "3 ollolol ol m m im km km km km km"
        },
        {
            checked: true,
            submitted: true,
            focus: false,
            text: "4 ollolol ol m m im km km km km km"
        },
    ]
}

const activeTabStore = (state = _navBarInfoInitialState, action) => {
    switch (action.type) {
        case 'SAVE_TODO_TEXT':
            console.log(action)
            return {
                ...state,
                items: state.items.map((x, i) =>
                    (i === action.breadcrumbs)
                        ? {...x, submitted: true, text: action.value}
                        : x
                )
            }
        case 'EDIT_TODO_TEXT':
            console.log("!action! = " + JSON.stringify(action))
            return {
                ...state,
                items: state.items.map((x, i) =>
                    (i === action.breadcrumbs)
                        ? {...x, submitted: false}
                        : x
                )
            }
        case "MOVE_FOCUS_NEXT":
            return {
                ...state,
                items: state.items.map((x, i) =>
                    (i === action.activeElement)
                        ? {...x, focus: true}
                        : {...x, focus: false}
                )
            }
        default:
            return state
    }
}

export default activeTabStore
