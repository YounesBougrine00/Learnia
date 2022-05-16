import {  LOAD_USER, LOGOUT, USER_LOADED} from "../types"

const initialState = {
    token : localStorage.getItem('token'),
    user_loading: true,
    user: null
}

export default function(state = initialState, action){
    const {type , payload} = action

    switch(type){
        case USER_LOADED:
            localStorage.setItem('token', payload)
            const encodedPayload = payload.split('.')[1];
            const user = JSON.parse(atob(encodedPayload));
       
            return {
                ...state,
                user: user,
                token: payload,
                user_loading:false,

            }
        case LOGOUT:
            
            localStorage.removeItem('token')
            return {
                ...state,
                user:null,
                token: null,
                user_loading:false
            }
        case LOAD_USER:
            const token = localStorage.getItem('token') || null

            if(token){
            const encodeddPayload = token.split('.')[1];
            const encodedUser = JSON.parse(atob(encodeddPayload));  
              return {
                ...state,
                user: encodedUser,
                token: token,
                user_loading:false,
            }
            }else {
                return {
                    ...state,
                    user:null,
                    token: null,
                    user_loading:false
                }
            }

          

        

        default:
            return state
    }

}