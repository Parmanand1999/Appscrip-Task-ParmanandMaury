import React, { useEffect, useState } from "react";
import styles from "../styles/FilterBar.module.css";
import RecommendedModal from "./RecommendedModal";
import FilterComponent from "./FilterComponent";
import { useDispatch, useSelector } from "react-redux";
import  {filtertoggle}  from "../Redux/Slice";

function FilterBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const countData = useSelector((state) => state.counterData.countData);

  const dispatch = useDispatch();
  

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className={styles["filter-bar"]}>
        <div className={styles["filter-bar-left"]}>
          <span className={styles["items-count"]}>{countData} ITEMS</span>
          <button
            className={styles["hide-filter-button"]}
            onClick={() => dispatch(filtertoggle())}
          >
            <span>HIDE FILTER</span>
          </button>
        </div>
        <div className={styles["filter-bar-right"]}>
          <span
            className={styles["recommended-label"]}
            onClick={toggleModal}
          >
            RECOMMENDED
          </span>
          <button className={styles["recommended-button"]}>
            <span className={styles["arrow-down"]}>▼</span>
          </button>
        </div>
      </div>
      {isModalOpen && <RecommendedModal toggleModal={isModalOpen} />}

     
    </div>
  );
}

export default FilterBar;
