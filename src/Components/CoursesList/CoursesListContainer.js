import { connect } from "react-redux";
import CoursesList from "./CoursesList";

let mapStateToProps = (state) => {
  return {
    courses: state.CoursesList.filtratedCourses,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

const CoursesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesList);

export default CoursesListContainer;
