import React from "react";
import { Button, Container } from "react-bootstrap";
import { ReactComponent as Image } from "../../../assets/career-and-finance/hero/BaseArrow.svg";
import styles from "./styles.module.scss";

const HeroSection2 = ({ data, style, button = true }) => {
  return (
    <div className={styles.heroSectionContent2} style={style}>
      <Container>
        <div className={styles.content}>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>

          {button && (
            <div className={styles.button}>
              <Button>
                Read More{" "}
                <span>
                  <Image />
                </span>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection2;
