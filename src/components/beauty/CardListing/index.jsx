import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import image1 from "../../../assets/beauty/listing/1.png";
import image2 from "../../../assets/beauty/listing/2.png";
import image3 from "../../../assets/beauty/listing/3.png";
import image4 from "../../../assets/beauty/listing/4.png";
import image5 from "../../../assets/beauty/listing/5.png";
import image6 from "../../../assets/beauty/listing/6.png";
import image7 from "../../../assets/beauty/listing/7.png";
import image8 from "../../../assets/beauty/listing/8.png";

import styles from "./styles.module.scss";

const CardListing = () => {
  const data = [
    {
      title: `Design
      Beyond its external effects, makeup can have a profound internal impact, fostering a sense of empowerment and self-care in a person. The joy that comes from mastering makeup techniques.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image1,
    },
    {
      title: `The allure of lingerie lies not just in its delicate fabrics and intricate designs but in the way it makes women feel. It allows them to embrace their bodies.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image2,
    },
    {
      title: `Spa days are popular among women because they allow them to rest, unwind, and pamper themselves. Spa days provide a pleasant break from the daily grind, allowing ladies to indulge in services.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image3,
    },
    {
      title: `Spa days are popular among women because they allow them to rest, unwind, and pamper themselves. Spa days provide a pleasant break from the daily grind, allowing ladies to indulge in services.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image4,
    },
    {
      title: `Design
      Beyond its external effects, makeup can have a profound internal impact, fostering a sense of empowerment and self-care in a person. The joy that comes from mastering makeup techniques.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image5,
    },
    {
      title: `Design
      The allure of lingerie lies not just in its delicate fabrics and intricate designs but in the way it makes women feel. It allows them to embrace their bodies.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image6,
    },
    {
      title: `Design
      Spa days are popular among women because they allow them to rest, unwind, and pamper themselves. Spa days provide a pleasant break from the daily grind, allowing ladies to indulge in services.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image7,
    },
    {
      title: `Design
      Spa days are popular among women because they allow them to rest, unwind, and pamper themselves. Spa days provide a pleasant break from the daily grind, allowing ladies to indulge in services.
      How do you create compelling presentations that wow your colleagues and impress your managers?`,
      image: image8,
    },
  ];
  return (
    <div className={styles.cardListing}>
      <Container>
        <Row className="gy-5 gy-md-3">
          {data.map((item, index) => (
            <Col md={6} lg={4} xl={3} key={index} className="d-flex">
              <div className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardListing;
