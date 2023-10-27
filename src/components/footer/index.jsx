import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { navlinks, soicals } from "../../data";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerParent}>
      <Container>
        <div className={styles.footerListing}>
          {navlinks.map(
            (e) =>
              e.subLinks !== null && (
                <div className={styles.footerMenu} key={e.title}>
                  <h3>{e.title2}</h3>
                  <ul>
                    {e.subLinks.map((e, i) => (
                      <li key={i}>{e?.title}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
        <div className={styles.lineBar}></div>
        <div className={styles.botomFooter}>
          <div className={styles.leftSide}>© 2023 WSH woman help squad</div>
          <div className={styles.rightSide}>
            {soicals.map((e, i) => (
              <a href="#" key={i}>
                <e.Image title={e.title} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
