import React from "react";
import { Button } from "react-bootstrap";
import image from "../../../assets/hero-section/1.png";
import styles from "./styles.module.scss";

const ActivityLogCard = ({ data }) => {
  return (
    <div className={styles.ActivityLogCard}>
      <div className={styles.imageBox}>
        <img src={data?.image} alt={data?.title} loading="lazy" />
      </div>
      <div className={styles.contentBox}>
        <h3>{data?.title} </h3>
      </div>
    </div>
  );
};

export default ActivityLogCard;
