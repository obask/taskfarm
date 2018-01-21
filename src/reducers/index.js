import {combineReducers} from 'redux'
import actionLogger from './actionLogger'
import locationHash from './windowLocationHash'
import globalStore from './globalStore'

const portalAppReducer = combineReducers({
    actionLogger,
    locationHash,
    globalStore,
})

export default portalAppReducer
