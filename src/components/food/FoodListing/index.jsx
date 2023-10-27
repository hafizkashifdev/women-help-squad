import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

import image1 from "../../../assets/food/listing/1.png";
import image2 from "../../../assets/food/listing/2.png";
import image3 from "../../../assets/food/listing/3.png";
import image4 from "../../../assets/food/listing/4.png";
import arrow from "../../../assets/career-and-finance/listing/BaseArrow.png";

const Columns = ({ item, index }) => {
  return (
    <>
      <Col
        xxl={6}
        xl={6}
        md={12}
        lg={6}
        className={`order-lg-1 ${index % 2 !== 0 ? "order-1" : "order-2"}`}
      >
        {index % 2 !== 0 ? (
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <Button>
              Read More{" "}
              <span>
                <img src={arrow} />
              </span>
            </Button>
          </div>
        ) : (
          <div className={styles.content}>
            <img src={item?.image} alt={item.title} />
          </div>
        )}
      </Col>
      <Col
        xxl={6}
        md={12}
        xl={6}
        lg={6}
        className={`order-lg-2 ${index % 2 === 0 ? "order-2" : "order1"}`}
      >
        {index % 2 === 0 ? (
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <Button>
              Read More{" "}
              <span>
                <img src={arrow} />
              </span>
            </Button>
          </div>
        ) : (
          <div className={styles.content}>
            <img src={item?.image} alt={item.title} />
          </div>
        )}
      </Col>
    </>
  );
};

const FoodListing = () => {
  const foodData = [
    {
      title: `5  Meals And Recipes For Meals That Are Best For Your Cold/Flu`,
      image: image1,
    },
    {
      title: `3  Latest Recipes For Meals That Would Help Your Pregnancy Journey `,
      image: image2,
    },
    {
      title: `Vegan Meals That Would Keep You Away From Meat `,
      image: image3,
    },
    {
      title: `10 Cheat Meals That will Blow Your Mind`,
      image: image4,
    },
  ];
  return (
    <div className={styles.foodListing}>
      <Container>
        {foodData.map((item, index) => (
          <Row
            className=" align-items-md-center"
            style={{ marginTop: "80px" }}
            key={index}
          >
            <Columns key={index} item={item} index={index} />
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default FoodListing;
