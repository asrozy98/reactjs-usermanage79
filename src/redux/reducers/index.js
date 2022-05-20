import { combineReducers } from 'redux'
import UsersReducer from './Users'
import SidebarReducer from './Sidebar'

export default combineReducers({
  UsersReducer,
  SidebarReducer,
})
