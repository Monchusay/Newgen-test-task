import {connect} from "react-redux";
import {filterByPriceActionCreator, sortCoursesActionCreator} from "../../Redux/CoursesListReducer";
import SortBar from "./SortBar";

let mapStateToProps = (state) => {
    return {
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        filterByPrice: (value) => {
            dispatch(filterByPriceActionCreator(value))
        },
        sortCourses: (value) => {
            dispatch(sortCoursesActionCreator(value))
        }
    };
};

const SortBarContainer = connect(mapStateToProps, mapDispatchToProps)(SortBar);

export default SortBarContainer;