import React from "react";
import style from "./CoursesListItem.module.css";
import { ReactComponent as ArrowRight } from "../../../Usage/ArrowRight.svg";

const CoursesListItem = (props) => {
  return (
    <div className={style.CoursesListItem}>
      <div className={style.CoursesListItemImage}>{props.courseImg}</div>
      <div className={style.CoursesListItemContent}>
        <div className={style.NameAndPrice}>
          <span className={style.Name}>{props.courseName}</span>
          <span className={style.Price}>
            {props.courseMinPrice}$ - {props.courseMaxPrice}$
          </span>
        </div>
        <div className={style.ToCourse}>
          <span className={style.ToCourseButton}>
            Перейти к курсу <ArrowRight className={style.ArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoursesListItem;
