import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { articles } from "../../../data";
import ArticlesCard1 from "../../common/ArticlesCard1";
import ArticlesCard2 from "../../common/ArticlesCard2";

const ArticleSection = () => {
  return (
    <div className={styles.Articles}>
      <Container>
        <div>
          <h2>Latest Articles</h2>
        </div>
        <Row className="gy-5 gy-md-3">
          <Col lg={12} xxl={6} className="d-flex">
            <ArticlesCard1 data={articles[0]} />
          </Col>
          <Col lg={12} xxl={6}>
            <ArticlesCard2 data={articles[1]} />
            <ArticlesCard2 data={articles[2]} />
            <ArticlesCard2 data={articles[3]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleSection;
