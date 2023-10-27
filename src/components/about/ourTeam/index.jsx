import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { ourTeam } from "../../../aboutData";
import { ReactComponent as Instagram } from "../../../assets/social-icons/instagram.svg";
import { ReactComponent as Facbook } from "../../../assets/social-icons/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/social-icons/twitter.svg";

const OurTeam = () => {
  return (
    <div className={styles.outTeam}>
      <Container>
        <div className={styles.heading}>
          <h5>How it works</h5>
          <h2>Our Team</h2>
        </div>
        <Row className="gy-5 gy-md-3">
          {ourTeam.map((e, i) => (
            <Col lg={4} md={6} key={i}>
              <div className={styles.teamCard}>
                <div className={styles.teamImage}>
                  <div className={styles.overlay}>
                    <div className={styles.soical}>
                      <Instagram />
                    </div>
                    <div className={styles.soical}>
                      <Facbook />
                    </div>
                    <div className={styles.soical}>
                      <Twitter />
                    </div>
                  </div>
                  <img src={e.image} alt="team" />
                </div>
                <div className={styles.content}>
                  <div>
                    <h4>{e.title}</h4>
                    <p>{e.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
