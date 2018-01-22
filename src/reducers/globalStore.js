import appStore from "../appStore";
import KEY_NAMES from "../models/keyNames";
import {EDIT_TODO_TEXT, MOVE_FOCUS_NEXT} from "../actions";

const _navBarInfoInitialState = {
    mode: 'Selection',
    activeElement: 1,
    numElements: 4
}

const globalStore = (state = _navBarInfoInitialState, action) => {
    // console.log("action.key = " + action.key)
    switch (action.type) {
        case "KEY_PRESS":
            if (state.mode === "Selection" && action.key === KEY_NAMES.ArrowDown) {
                setTimeout(function () {
                    appStore.dispatch(MOVE_FOCUS_NEXT({
                        activeElement: Math.min(state.numElements - 1, state.activeElement + 1)
                    }))
                }, 0);
            }
            if (state.mode === "Selection" && action.key === KEY_NAMES.ArrowUp) {
                setTimeout(function () {
                    appStore.dispatch(MOVE_FOCUS_NEXT({
                        activeElement: Math.max(0, state.activeElement - 1)
                    }))
                }, 0);
            }
            if (state.mode === "Selection" && action.key === "e") {
                setTimeout(function () {
                    appStore.dispatch(EDIT_TODO_TEXT({breadcrumbs: state.activeElement}))
                }, 0);
            }
            return state
        case "MOVE_FOCUS_NEXT":
            return {
                ...state,
                activeElement: action.activeElement,
            }
        default:
            return state
    }
}

export default globalStore
