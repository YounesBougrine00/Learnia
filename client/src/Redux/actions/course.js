import axios from 'axios'
import { CLEAR_COURSE, GET_COURSE, GET_COURSES, GET_LANDING_COURSES } from '../types'
import { COURSE_ADDED_SUCCESSFULLY } from '../types'


//Add course

export const addCourse = (course)=> async dispatch  => {
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        await axios.post('http://localhost:5003/api/course',course,config)
        dispatch(courseAddedState(true))

    } catch (error) {
        console.log(error)
    }
}

//Get courses

export const getCourses = () => async dispatch => {


    try {

        const res = await axios.get('http://localhost:5003/api/course')
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

//Get landing page courses

export const getLandingCourses = () => async dispatch => {
    try {

        const res = await axios.get('http://localhost:5003/api/course/landing')
        dispatch({
            type: GET_LANDING_COURSES,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}



// Get course by Id
export const getCourse = (courseId) => async dispatch => {
    dispatch({
        type: CLEAR_COURSE
    })
    try {
        const res = await axios.get(`http://localhost:5003/api/course/${courseId}`)
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