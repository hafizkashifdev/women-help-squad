import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

const CareerHeading = () => {
  return (
    <div className={styles.outTeam}>
      <Container>
        <div className={styles.heading}>
          <h5>Come Join Us</h5>
          <h2>Job Openings</h2>
          <p>
            We’re always looking for creative, talented self-starters to join
            the <b style={{ color: "#fd6288" }}>Women Help Gender</b> family.
            Check out our open roles below and fill out an application.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default CareerHeading;
