import axios from 'axios'
import { GET_COURSE, GET_COURSES } from '../types'
import { COURSE_ADDED_SUCCESSFULLY } from '../types'


//Add course

export const addCourse = (course)=> async dispatch  => {
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        await axios.post('/api/courses',course,config)
        dispatch(courseAddedState(true))

    } catch (error) {
        console.log(error)
    }
}

//Get courses

export const getCourses = () => async dispatch => {
    try {

        const res = await axios.get('/api/courses')
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}


// Get course by Id
export const getCourse = (courseId) => async dispatch => {
    try {
        const res = await axios.get(`/api/courses/${courseId}`)
        dispatch({
            type: GET_COURSE,
            payload:res.data
        })
    } catch (err) {
        console.log(err)
    }
}

//course Added state

export const courseAddedState = (state) => dispatch => {
    try {
        dispatch({
            type: COURSE_ADDED_SUCCESSFULLY,
            payload: state
        })
        
    } catch (error) {
        console.log(error)
    }
}