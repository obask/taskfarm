import {createStore} from 'redux'
import portalAppReducer from './reducers'

const appStore = createStore(portalAppReducer)

export default appStore
