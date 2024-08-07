import React, { useEffect, useState } from "react";
import styles from "../styles/ProductCard.module.css";
import axios from "axios";
import FilterBar from "./FilterBar";

const ProductCard = ({ filterArray }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItem,setTotalItem]=useState(0)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setFilteredData(response.data); 
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    filterData();
    countItem()
  }, [filterArray, data]);

  const filterData = () => {
    if (!filterArray || filterArray.length === 0 || filterArray.includes("All")) {
        setFilteredData(data);
    }
    else {
      const result = data.filter((item) => filterArray?.includes(item.category));
      setFilteredData(result);
    }
  };
  const countItem = () => {
    const total = filteredData?.length || 0; 
    // setTotalItem(total); 
    localStorage.setItem('totalItems', total); 
  };

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={styles["product-list"]}>
          {filteredData.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    
    </div>
  );
};

export default ProductCard;
