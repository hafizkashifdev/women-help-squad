import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { doctorsHealth } from "../../../healthData";
import DoctorsCard from "../../common/DoctorsCard";
import boy from "../../../assets/health-page/doctors/5.png";

const Doctors = () => {
  return (
    <div className={styles.doctorsHead}>
      <Container>
        <div className={styles.serviceHeading}>
          <h2> Our Qualified Doctors</h2>
          <p>
            Get Your Health Complaints Handled by The best and Most Qualified
            Specialists and Doctors
          </p>
        </div>
        <Row className="gy-5 gy-md-3">
          {doctorsHealth.map((e, i) => (
            <Col xl={3} lg={4} md={6} className="d-flex" key={i}>
              <DoctorsCard data={e} />
            </Col>
          ))}
        </Row>
        <Row
          className="gy-5 align-items-xl-center"
          style={{ marginTop: "80px" }}
        >
          <Col xl={6} lg={12} md={12} className="d-flex">
            <div className={styles.doctorImage}>
              <img src={boy} loading="lazy" alt="logo" />
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} className="d-flex">
            <div className={styles.doctorImage}>
              <p>
                Did you know that general health in the UK faces several
                significant challenges and disparities? Despite progress, there
                are still issues related to healthcare accessibility and
                affordability, particularly for marginalised and low-income
                People. Many of whom continue to experience long waiting times
                and limited access to specialist services, resulting in delayed
                diagnoses and treatments. Additionally, funding cuts and
                resource constraints have impacted essential health services,
                leading to reduced availability of screenings for conditions
                like cervical and breast cancer as well as other cancerous
                agents. Mental health support sectors also remains inadequate,
                with limited resources and long waiting lists for counseling and
                therapy services. Furthermore, certain reproductive health
                services, including access to contraception and family planning
                options, have faced restrictions and controversies. There are
                persistent gaps in human health.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
