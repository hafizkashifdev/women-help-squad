import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { navlinks } from "../../data";
import logo from "../../assets/navbar/logo.svg";
import styles from "./styles.module.scss";
import useScreenResolution from "../../hooks/useScreenResolution";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";

const Header = () => {
  const { width } = useScreenResolution();
  const isMobile = width < 1100;
  const [show, isShow] = useState(false);
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.navbarParent}>
          <div className={styles.logo} style={{ cursor: "pointer" }}>
            <Link to={"/"}>
              <img src={logo} alt="website-logo" loading="lazy" />
            </Link>
          </div>
          {isMobile && (
            <div className={styles.hamburger} onClick={() => isShow(!show)}>
              <ul className={`${show ? "active" : ""}`}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          )}
          {isMobile && show ? (
            <div
              className={`${styles.navbarListing} ${
                isMobile ? styles.mobileScreen : ""
              }`}
            >
              <ul>
                {navlinks.map(
                  (e, i) =>
                    e.title !== null && (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? styles.active : ""
                        }
                        onClick={() => isShow(false)}
                        to={e.slug}
                        key={i}
                      >
                        {e.title}
                      </NavLink>
                    )
                )}
              </ul>
              <div className={styles.buttonSection}>
                <Button>Login</Button>
                <Button>signup</Button>
              </div>
            </div>
          ) : (
            <>
              <div className={`${styles.navbarListing} `}>
                <ul>
                  {navlinks.map(
                    (e, i) =>
                      e.title !== null && (
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? styles.active : ""
                          }
                          to={e.slug}
                          key={i}
                        >
                          {e.title}
                        </NavLink>
                      )
                  )}
                </ul>
                <div className={styles.buttonSection}>
                  <Button>Login</Button>
                  <Button>signup</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
