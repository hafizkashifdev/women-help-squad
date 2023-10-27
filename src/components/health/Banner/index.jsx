import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { doctorsHealth } from "../../../healthData";
import DoctorsCard from "../../common/DoctorsCard";
import boy from "../../../assets/health-page/doctors/5.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container>
        <div className={styles.box}>
          <h2>Get Started With Gender Help Squad</h2>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Button>Lets Get Started</Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
