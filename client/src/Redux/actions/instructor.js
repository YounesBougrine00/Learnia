import axios from 'axios'
import { GET_INSTRUCTORS, ADD_INSTRUCTOR } from '../types'

//Get instructors
export const getInstructors = () =>async dispatch => {
    try {
        const res = await axios.get('http://localhost:5002/api/instructor')
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
        const res = await axios.post('http://localhost:5002/api/instructor',instructor,config)
        dispatch({
            type: ADD_INSTRUCTOR,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}