import React, { useState } from 'react';
import styles from "../styles/RecommendedModal.module.css";
function RecommendedModal({toggleModal}) {
  

  return (
    <div>
      
    
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles["modal-content"]}>
            
            <div className={styles["modal-header"]}>
              <h4>Recommended</h4>
              
            </div>
            <div className={styles["modal-body"]}>
              <ul>
                <li>Newest First</li>
                <li>Popular</li>
                <li>Price: High to Low</li>
                <li>Price: Low to High</li>
              </ul>
            </div>
          </div>
        </div>
      )
    </div>
  );
}

export default RecommendedModal;