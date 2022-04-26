import { COURSE_ADDED_SUCCESSFULLY, GET_COURSE,GET_COURSES } from "../types"

const initalState = {
  courses:[],
  course:null,
  courses_loading: true,
  course_loading:true,
  course_added_successfully: false
}

export default function (state = initalState, action){

    const {type, payload} = action

    switch(type){
        case GET_COURSES:
            return {
                ...state,
                courses: payload,
                courses_loading: false
            }
        case GET_COURSE:
            return {
                ...state,
                course: payload,
                course_loading: false
            }
        case COURSE_ADDED_SUCCESSFULLY:
            return{
                ...state,
                course_added_successfully: payload
            }

        default:
            return state
    }
}