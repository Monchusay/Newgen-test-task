import React from "react";
import style from "./SortBar.module.css";
import Select from "react-select";
import { ReactComponent as ResetFiltersIcon } from "../../Usage/ResetFiltersIcon.svg";

const SortBar = (props) => {
  const optionsPrices = [
    { value: "AllPrices", label: "Все курсы" },
    { value: "Below200", label: "До 200$" },
    { value: "Between100and400", label: "100$-400$" },
    { value: "Between400and700", label: "400$-700$" },
    { value: "Between700and1000", label: "700$-1000$" },
  ];
  const optionsSorting = [
    { value: "Ascending", label: "По возрастанию" },
    { value: "Descending", label: "По убыванию" },
  ];
  const onFilteringByPrice = (value) => {
    props.filterByPrice(value);
  };
  const onSorting = (value) => {
    props.sortCourses(value);
  };
  const refreshPage = () => {
    console.log("refresh");
    window.location.reload();
  };
  return (
    <div className={style.SortBar}>
      <div className={style.Selectors}>
        <Select
          className={style.PriceSelector}
          classNamePrefix="selectors"
          placeholder="Все курсы"
          options={optionsPrices}
          isSearchable={false}
          onChange={(type) => onFilteringByPrice(type.value)}
        />
        <Select
          className={style.SortSelector}
          placeholder="Сортировать по цене"
          classNamePrefix="selectors"
          options={optionsSorting}
          isSearchable={false}
          onChange={(type) => onSorting(type.value)}
        />
        <span className={style.ResetFilters} onClick={refreshPage}>
          Сбросить фильтры{" "}
          <ResetFiltersIcon className={style.ResetFiltersIcon} />
        </span>
      </div>
    </div>
  );
};

export default SortBar;
