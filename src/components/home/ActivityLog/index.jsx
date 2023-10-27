import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import ActivityLogCard from "../../common/ActivityLogCard";
import { activityLog } from "../../../data";
import arrow from "../../../assets/hero-section/bot-arrow.png";

const ActivityLog = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.ActivityLog}>
      <Container>
        <div className={styles.heading}>
          <h2>Activity log</h2>
        </div>
        <Row
          className={`gy-4 ${styles.imageCover}`}
          style={{ margin: "50px 0", maxHeight: show ? "100%" : "" }}
        >
          <div
            className={styles.overlay}
            style={{ visibility: show ? "hidden" : "visible" }}
          ></div>
          {activityLog?.map(
            (e, i) =>
              i < 8 && (
                <Col
                  md={6}
                  xs={12}
                  lg={4}
                  xxl={3}
                  className="d-flex justify-content-center"
                  key={i}
                >
                  <ActivityLogCard data={e} />
                </Col>
              )
          )}

          {activityLog?.map(
            (e, i) =>
              i > 7 && (
                <Col
                  md={6}
                  xs={12}
                  lg={4}
                  xxl={3}
                  className="d-flex justify-content-center"
                  key={i}
                >
                  <ActivityLogCard data={e} />
                </Col>
              )
          )}
        </Row>
        <div className="text-center">
          <p onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
            {" "}
            {show ? "Close" : "Show More"}{" "}
            <span>
              <img
                src={arrow}
                style={{
                  transform: show ? "rotate(180deg)" : "",
                }}
              />
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ActivityLog;
