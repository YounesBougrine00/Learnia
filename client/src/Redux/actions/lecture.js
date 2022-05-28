import axios from 'axios'
import { GET_LECTURES, ADD_LECTURE, DELETE_LECTURES } from '../types'

//Get Lectures
export const getLectures = (courseId) =>async dispatch => {
    try {
        
        const res = await axios.get(`http://localhost:5004/api/lecture/${courseId}`)
        dispatch ({
            type: GET_LECTURES,
            payload: res.data
        })
        
    } catch (err) {
       console.log(err)
    }
}

//Add Lecture

export const addLecture = (lecture) => async dispatch => {
    try {
       dispatch({
           type: ADD_LECTURE,
           payload: lecture
       })
    } catch (error) {
        console.log(error)
    }
}

//delete lectures
export const deleteLectures = () => async dispatch => {
    dispatch({
        type: DELETE_LECTURES
    })
}