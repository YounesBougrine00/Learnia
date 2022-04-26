import axios from 'axios'
import { GET_INSTRUCTORS, ADD_INSTRUCTOR } from '../types'

//Get instructors
export const getInstructors = () =>async dispatch => {
    try {
        const res = await axios.get('/api/instructors')
        dispatch ({
            type: GET_INSTRUCTORS,
            payload: res.data
        })
        
    } catch (err) {
       console.log(err)
    }
}

//Add instructor

export const addInstructor = (instructor) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/instructors',instructor,config)
        dispatch({
            type: ADD_INSTRUCTOR,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}