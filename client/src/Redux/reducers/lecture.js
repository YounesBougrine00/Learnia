import { GET_LECTURES, ADD_LECTURE, DELETE_LECTURES } from '../types'


const initalState = {
  lectures:[],
  lectures_loading:true
}

export default function (state = initalState, action){

    const {type, payload} = action

    switch(type){
        case GET_LECTURES:
            return {
                ...state,
                lectures: payload,
                lectures_loading: false
            }
        case ADD_LECTURE:
            return {
                ...state,
                lectures: [...state.lectures,payload]
            }
        
        case DELETE_LECTURES: 
            return {
                ...state,
                lectures_loading:true,
                lectures:[]
            }
        
       
        default:
            return state
    }
}