import React from "react";
import { Button } from "react-bootstrap";
import image from "../../../assets/hero-section/1.png";
import up from "../../../assets/hero-section/up.svg";

import styles from "./styles.module.scss";

const FeaturedCard2 = ({ data }) => {
  return (
    <div className={styles.featureCard2}>
      <div className={styles.imageBox}>
        <div className={styles.overlay}></div>
        <img src={data?.image} alt={data?.title} loading="lazy" />
        {/* <img src={up} className={styles.up} /> */}
      </div>
      <div
        className={styles.contentBox}
        style={{ backgroundColor: data?.color }}
      >
        <div className={styles.category}>{data?.category}</div>
        <h3>{data?.title}</h3>
      </div>
    </div>
  );
};

export default FeaturedCard2;
