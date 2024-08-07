import React, { useEffect, useState } from "react";
import styles from "../styles/FilterBar.module.css";
import RecommendedModal from "./RecommendedModal";
import FilterComponent from "./FilterComponent";
import ProductCard from "./ProductCard";

function FilterBar({ totalItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filtertoggle, setFiltertoggle] = useState(true);
  const [countitem, setCountitem] = useState(null);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const togglefilter = () => {
    setFiltertoggle(!filtertoggle);
  };
  const totalItems =localStorage?.getItem('totalItems')
  
  useEffect(() => {
    
    setCountitem(totalItems);
  }, [totalItems]);
  

  return (
    <div>
      <div className={styles["filter-bar"]}>
        <div className={styles["filter-bar-left"]}>
          <span className={styles["items-count"]}>{countitem} ITEMS</span>
          <button
            className={styles["hide-filter-button"]}
            onClick={togglefilter}
          >
            <span>HIDE FILTER</span>
          </button>
        </div>
        <div className={styles["filter-bar-right"]}>
          <span className={styles["recommended-label"]} onClick={toggleModal}>
            RECOMMENDED
          </span>
          <button className={styles["recommended-button"]}>
            <span className={styles["arrow-down"]}>▼</span>
          </button>
        </div>
      </div>
      {isModalOpen && <RecommendedModal toggleModal={toggleModal} />}
      
        <FilterComponent filtertoggle={filtertoggle} />
        
     
    </div>
  );
}

export default FilterBar;
