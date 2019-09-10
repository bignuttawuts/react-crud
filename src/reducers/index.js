import { combineReducers } from 'redux'
import documents from './documents.reducer'
import document from './document.reducer'

export default combineReducers({
    documents,
    document
})
