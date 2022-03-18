import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
const allReducers = combineReducers({
  LoginReducer: LoginReducer,
})
export default allReducers
