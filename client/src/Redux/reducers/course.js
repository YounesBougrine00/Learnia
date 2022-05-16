import { CLEAR_COURSE, COURSE_ADDED_SUCCESSFULLY, GET_COURSE,GET_COURSES, GET_LANDING_COURSES } from "../types"

const initalState = {
  courses:[],
  course:null,
  courses_loading: true,
  landing_courses:[],
  course_loading:true,
  course_added_successfully: false,
  landing_courses_loading: true
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
        case GET_LANDING_COURSES:
            return {
                    ...state,
                    landing_courses: payload,
                    landing_courses_loading: false
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
        case CLEAR_COURSE:
            return {
                ...state,
                course: null,
                course_loading:true
            }

        default:
            return state
    }
}