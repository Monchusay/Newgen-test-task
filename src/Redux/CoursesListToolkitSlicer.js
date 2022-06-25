import { createSlice } from "@reduxjs/toolkit";

const CoursesListToolkitSlicer = createSlice({
  name: "coursesList",
  initialState: {
    allCourses: [
      {
        courseImg: "Исходник img с флагом",
        courseName: "English Language",
        courseMinPrice: 50,
        courseMaxPrice: 130,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "French Language",
        courseMinPrice: 250,
        courseMaxPrice: 390,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Deutsch Language",
        courseMinPrice: 140,
        courseMaxPrice: 285,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Spanish Language",
        courseMinPrice: 460,
        courseMaxPrice: 650,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Chinese Language",
        courseMinPrice: 710,
        courseMaxPrice: 990,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Turkish Language",
        courseMinPrice: 100,
        courseMaxPrice: 220,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Polish Language",
        courseMinPrice: 80,
        courseMaxPrice: 300,
      },
    ],
    filtratedCourses: [
      {
        courseImg: "Исходник img с флагом",
        courseName: "English Language",
        courseMinPrice: 50,
        courseMaxPrice: 130,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "French Language",
        courseMinPrice: 250,
        courseMaxPrice: 390,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Deutsch Language",
        courseMinPrice: 140,
        courseMaxPrice: 285,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Spanish Language",
        courseMinPrice: 460,
        courseMaxPrice: 650,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Chinese Language",
        courseMinPrice: 710,
        courseMaxPrice: 990,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Turkish Language",
        courseMinPrice: 100,
        courseMaxPrice: 220,
      },
      {
        courseImg: "Исходник img с флагом",
        courseName: "Polish Language",
        courseMinPrice: 80,
        courseMaxPrice: 300,
      },
    ],
  },
  reducers: {
    filterByPriceToolkitActionCreator(state, action) {
      if (action.payload === "AllPrices") {
        return { ...state, filtratedCourses: state.allCourses };
      }
      let mapping = {
        Below200: {
          courseMinPrice: 0,
          courseMaxPrice: 200,
        },
        Between100and400: {
          courseMinPrice: 100,
          courseMaxPrice: 400,
        },
        Between400and700: {
          courseMinPrice: 400,
          courseMaxPrice: 700,
        },
        Between700and1000: {
          courseMinPrice: 700,
          courseMaxPrice: 1000,
        },
      };
      let coursesFilteredByPrice = state.allCourses.filter(
        (course) =>
          course.courseMinPrice >= mapping[action.payload].courseMinPrice &&
          course.courseMaxPrice <= mapping[action.payload].courseMaxPrice
      );
      return {
        ...state,
        filtratedCourses: coursesFilteredByPrice,
      };
    },
    sortCoursesToolkitActionCreator(state, action) {
      if (action.payload === "Ascending") {
        state.filtratedCourses.sort(
          (a, b) => a.courseMinPrice - b.courseMinPrice
        );
      }
      if (action.payload === "Descending") {
        state.filtratedCourses.sort(
          (a, b) => b.courseMinPrice - a.courseMinPrice
        );
      }
    },
  },
});

export default CoursesListToolkitSlicer.reducer;
export const {
  filterByPriceToolkitActionCreator,
  sortCoursesToolkitActionCreator,
} = CoursesListToolkitSlicer.actions;
