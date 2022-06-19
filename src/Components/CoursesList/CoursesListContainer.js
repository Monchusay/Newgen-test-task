import {connect} from "react-redux";
import CoursesList from "./CoursesList";
import {filterByPriceActionCreator} from "../../Redux/CoursesListReducer";

let mapStateToProps = (state) => {
    return {
        courses: state.CoursesList.filtratedCourses,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        filterByPrice: (value) => {
            dispatch(filterByPriceActionCreator(value))
        }
    };
};

const CoursesListContainer = connect(mapStateToProps, mapDispatchToProps)(CoursesList);

export default CoursesListContainer;