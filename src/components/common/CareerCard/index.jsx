import React from "react";
import { Button } from "react-bootstrap";
import arrow from "../../../assets/career-and-finance/listing/BaseArrow.png";
import styles from "./styles.module.scss";

const CareerCard = ({ item, className, imageClaseName }) => {
  return (
    <div className={`${styles.articleCard}  ${className ? className : ""} `}>
      <div
        className={`${styles.imageBox} ${imageClaseName ? imageClaseName : ""}`}
      >
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.content}>
        <h5>{item.title}</h5>
        <Button>
          Read more{" "}
          <span>
            {" "}
            <img src={arrow} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CareerCard;
