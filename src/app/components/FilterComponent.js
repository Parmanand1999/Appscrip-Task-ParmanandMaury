// src/components/FilterComponent.js
import React, { useState } from "react";
import styles from "../styles/FilterComponent.module.css";
import ProductCard from "./ProductCard";

function FilterComponent({filtertoggle}) {
  const [filterArray, setfilterArray] = useState(["All"]);

  const handleIdealForChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setfilterArray([...filterArray, value]);
    } else {
      setfilterArray(filterArray.filter((item) => item !== value));
    }
  };


  return (
    <div style={{display:"flex"}}>
     {filtertoggle? <div className={styles["filter-section"]}>
        <div className={styles["filter-item-customizable"]}>
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
        </div>
        <div className={styles["filter-item"]}>
          <div className={styles["filter-item-header"]}>
            <h3 className={styles["filter-title"]}>IDEAL FOR</h3>
            <span>▼</span>
          </div>
          <div className={styles["filter-options"]}>
            <div>
              <input
                type="checkbox"
                id="idealFor-all"
                value="All"
                defaultChecked
                onChange={handleIdealForChange}
              />
              <label htmlFor="idealFor-all">All</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="idealFor-men"
                value="men's clothing"
                onChange={handleIdealForChange}
              />
              <label htmlFor="idealFor-men">Men</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="idealFor-women"
                value="women's clothing"
                onChange={handleIdealForChange}
              />
              <label htmlFor="idealFor-women">Women</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="idealFor-babyKids"
                value="Baby & Kids"
                onChange={handleIdealForChange}
              />
              <label htmlFor="idealFor-babyKids">Baby & Kids</label>
            </div>
          </div>
        </div>
        <div className={styles["filter-item"]}>
          <div className={styles["filter-item-header"]}>
            <h3 className={styles["filter-title"]}>OCCASION</h3>
            <span>▼</span>
          </div>
          <div className={styles["filter-options"]}>
            <label htmlFor="occasion-all">All</label>
            {/* Add more options as needed */}
          </div>
        </div>
        <div className={styles["filter-item"]}>
          <div className={styles["filter-item-header"]}>
            <h3 className={styles["filter-title"]}>WORK</h3>
            <span>▼</span>
          </div>
          <div className={styles["filter-options"]}>
            <label htmlFor="work-all">All</label>
            {/* Add more options as needed */}
          </div>
        </div>
        <div className={styles["filter-item"]}>
          <div className={styles["filter-item-header"]}>
            <h3 className={styles["filter-title"]}>FABRIC</h3>
            <span>▼</span>
          </div>
          <div className={styles["filter-options"]}>
            <label htmlFor="fabric-all">All</label>
            {/* Add more options as needed */}
          </div>
        </div>
        <div className={styles["filter-item"]}>
          <div className={styles["filter-item-header"]}>
            <h3 className={styles["filter-title"]}>SEGMENT</h3>
            <span>▼</span>
          </div>
          <div className={styles["filter-options"]}>
            <label htmlFor="segment-all">All</label>
            {/* Add more options as needed */}
          </div>
        </div>
        <div className={styles["filter-item"]}>
          <div className={styles["filter-item-header"]}>
            <h3 className={styles["filter-title"]}>SUITABLE FOR</h3>
            <span>▼</span>
          </div>
          <div className={styles["filter-options"]}>
            <label htmlFor="suitableFor-all">All</label>
            {/* Add more options as needed */}
          </div>
        </div>
      </div>:null}

     <ProductCard filterArray={filterArray}/>
    </div>
  );
}

export default FilterComponent;
