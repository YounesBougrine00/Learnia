import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import CourseCard from "./CourseCard";
import "./Courses.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCourses } from "../../../Redux/actions/course";

const CoursesDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { courses_loading, courses } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <>
      <AdminNav />
      <div className="container">
        <div className="add-course">
          <button
            onClick={() => navigate("/admin/home/courses/add-course")}
            className="btn btn-primary"
            style={{ marginLeft: 0, fontWeight: "500" }}
          >
            Add new course{" "}
          </button>
        </div>
        <p className="p-title">Learnia courses</p>

        {!courses_loading &&
          (courses.length == 0 || !Array.isArray(courses) ? (
            <div className="no-courses">There are no courses yet! </div>
          ) : (
            <div className="courses-grid">
              {courses?.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default CoursesDashboard;
