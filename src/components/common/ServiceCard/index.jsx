import React from "react";
import { Button } from "react-bootstrap";
import image from "../../../assets/hero-section/1.png";
import styles from "./styles.module.scss";

const ServiceCard = ({ data }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceImage}>
        <img src={data.image} loading="lazy" alt={data.title}/>
      </div>
      <div className={styles.serviceContent}>
        <div className={styles.content}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div className={styles.button}>
          <Button>{data.buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
