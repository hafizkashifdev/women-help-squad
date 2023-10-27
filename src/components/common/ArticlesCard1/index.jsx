import React from "react";
import { Button } from "react-bootstrap";
import image from "../../../assets/hero-section/1.png";
import up from "../../../assets/hero-section/up-black.svg";

import styles from "./styles.module.scss";

const ArticlesCard1 = ({ data }) => {
  return (
    <div className={styles.ArticlesCard1}>
      <div className={styles.imageBox}>
        <img src={data?.image} alt={data?.title} loading="lazy" />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.category}>{data?.category}</div>
        <div className="d-flex align-items-start justify-content-between">
          <h3>{data?.title}</h3>
          <img src={up} className={styles.up} loading="lazy" alt="up-arrow" />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard1;
