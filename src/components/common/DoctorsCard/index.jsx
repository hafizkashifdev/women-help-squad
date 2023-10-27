import React from "react";
import { Button } from "react-bootstrap";
import image from "../../../assets/hero-section/1.png";
import styles from "./styles.module.scss";

const DoctorsCard = ({ data }) => {
  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorImage}>
        <img src={data.image} loading="lazy" alt={data.title} />
      </div>
      <div className={styles.doctorContent}>
        <div className={styles.content}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
