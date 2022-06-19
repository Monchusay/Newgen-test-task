import React from "react";
import style from "./CoursesList.module.css";
import CoursesListItem from "./CoursesListItem/CoursesListItem";

const CoursesList = (props) => {
  let Courses = props.courses.map((c) => (
    <CoursesListItem
      key={c.courseName}
      courseImg={c.courseImg}
      courseName={c.courseName}
      courseMinPrice={c.courseMinPrice}
      courseMaxPrice={c.courseMaxPrice}
    />
  ));

  return <div className={style.CoursesList}>{Courses}</div>;
};

export default CoursesList;
