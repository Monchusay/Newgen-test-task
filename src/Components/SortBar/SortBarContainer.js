import {connect} from "react-redux";
import SortBar from "./SortBar";
import {filterByPriceToolkitActionCreator, sortCoursesToolkitActionCreator} from "../../Redux/CoursesListToolkitSlicer";

let mapStateToProps = (state) => {
    return {
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
      filterByPrice: (value) => {
        dispatch(filterByPriceToolkitActionCreator(value));
      },
      sortCourses: (value) => {
        dispatch(sortCoursesToolkitActionCreator(value));
      },
    };
};

const SortBarContainer = connect(mapStateToProps, mapDispatchToProps)(SortBar);

export default SortBarContainer;