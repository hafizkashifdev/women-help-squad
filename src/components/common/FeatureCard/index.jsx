import React from "react";
import { Button } from "react-bootstrap";
import image from "../../../assets/hero-section/1.png";
import styles from "./styles.module.scss";

const FeaturedCard = ({ data }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.imageBox}>
        <img src={data?.image} alt={data?.title} loading="lazy" />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.category}>{data?.category}</div>
        <h2>{data?.title} </h2>
        <p>{data?.description}</p>
        <Button>{data?.buttonText}</Button>
      </div>
    </div>
  );
};

export default FeaturedCard;
