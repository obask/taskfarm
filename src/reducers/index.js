import {combineReducers} from 'redux'
import actionLogger from './actionLogger'
import locationHash from './windowLocationHash'
import globalStore from './globalStore'
import activeTabStore from "./activePageStore";

const portalAppReducer = combineReducers({
    actionLogger,
    locationHash,
    globalStore,
    activeTabStore,
})

export default portalAppReducer
