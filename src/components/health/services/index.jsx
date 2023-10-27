import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { servicesHealth } from "../../../healthData";
import ServiceCard from "../../common/ServiceCard";

const Services = () => {
  return (
    <div className={styles.servicesHead}>
      <Container>
        <div className={styles.serviceHeading}>
          <h2>Our Services and Categories</h2>
          <p>
            Cronavirus disease 2019 is a contagious disease caused by severe
            acute respiratory syndrome coronavirus 2. The first case was
            identified in Wuhan, China, in December 2019.Symptoms of COVID-19
            are variable,{" "}
          </p>
        </div>
        <Row className="gy-5 gy-md-3">
          {servicesHealth.map((e, i) => (
            <Col xl={4} md={6} key={i} className="d-flex">
              <ServiceCard data={e} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
