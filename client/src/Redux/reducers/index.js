import { combineReducers } from "redux";
import alert from './alert'
import instructor from './instructor'
import course from './course'
import lecture from './lecture'
import auth from './auth'



export default combineReducers({
    alert,
    instructor,
    course,
    lecture,
    auth
})