import React from "react";
import image from "../../../assets/food/health-food/Icon.png";
import styles from "./styles.module.scss";

const FoodCard = ({ item }) => {
  return (
    <div className={styles.foodCard}>
      <div className={styles.imageBox}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.content}>
        <h5>{item.title}</h5>
        <img src={image} />
      </div>
    </div>
  );
};

export default FoodCard;
