import { ADD_INSTRUCTOR,GET_INSTRUCTORS } from "../types"

const initalState = {
  instructors:[],
  instructor:null,
  loading: true
}

export default function (state = initalState, action){

    const {type, payload} = action

    switch(type){
        case GET_INSTRUCTORS:
            return {
                ...state,
                instructors: payload,
                loading: false
            }
        case ADD_INSTRUCTOR:
            return {
                ...state,
                instructors: [payload, ...state.instructors],
                loading: false
            }
     

        default:
            return state
    }
}