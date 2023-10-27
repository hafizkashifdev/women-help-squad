import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image1 from "../../../assets/food/health-food/1.png";
import image2 from "../../../assets/food/health-food/2.png";
import image3 from "../../../assets/food/health-food/3.png";
import FoodCard from "../../common/FoodCard";

const HealthyFood = () => {
  const healthData = [
    {
      title: "What Foods Help Prevent Cancer Risk?",
      image: image1,
    },
    {
      title: "How To Make A Fun Kids Meal",
      image: image2,
    },
    {
      title: "How can My Diet Affect my Sleep",
      image: image3,
    },
  ];
  return (
    <div className={styles.healthyFood}>
      <Container>
        <h2>Healthy Food </h2>
        <Row className="gy-5 gy-md-3">
          {healthData.map((item, index) => (
            <Col md={6} lg={4} key={index} className="d-flex">
              <FoodCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HealthyFood;
