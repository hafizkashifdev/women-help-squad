import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image1 from "../../../assets/wellness/fitness/1.png";
import image2 from "../../../assets/wellness/fitness/2.png";
import image3 from "../../../assets/wellness/fitness/3.png";
import image4 from "../../../assets/wellness/fitness/4.png";
import image5 from "../../../assets/wellness/fitness/5.png";
import image6 from "../../../assets/wellness/fitness/6.png";

import FoodCard from "../../common/FoodCard";

const FitnessLising = () => {
  const fitnessLising = [
    {
      title: "Exercise might be the one way for your mental Health to Improve",
      image: image1,
      col: 4,
    },
    {
      title: "The Perfect Protein Shakes to add to your gym routine",
      image: image2,
      col: 4,
    },
    {
      title:
        "Exercising with your Partner increases emotionally connections, Here is how",
      image: image3,
      col: 4,
    },
    {
      title: "Is There a Thing Like Too Much Exercise?",
      image: image4,
      col: 6,
    },
    {
      title:
        "How to Build the Perfect glutes and Tone the Body without excessive muscle mass",
      image: image5,
      col: 6,
    },
    {
      title: "All you need to Know About Gym Time.",
      image: image6,
      col: 6,
    },
  ];
  return (
    <div className={styles.fitnessLising}>
      <Container>
        <h2>FITNESS</h2>

        <Row className="gy-5 gy-md-3">
          {fitnessLising.map((item, index) => (
            <Col key={index} xxl={4} lg={4} md={6} xs={12} className="d-flex">
              <FoodCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FitnessLising;
