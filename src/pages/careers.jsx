import React from "react";
import HeroSection2 from "../components/common/HeroSection2";
import bg from "../assets/careers/hero/bg.jpg";
import { Container } from "react-bootstrap";
import CareerHeading from "../components/careers/heading";
import FirstSection from "../components/careers/firstSection";

const Careers = () => {
  const headingData = {
    title: `careers `,
    description: `Creating an inclusive & diverse environment for your success`,
    image: bg,
  };

  return (
    <div>
      <HeroSection2
        data={headingData}
        style={{ backgroundImage: `url(${bg})` }}
        button={false}
      />
      <CareerHeading />
      <div className="py-5">
        <Container>
          <div className={"h-100 w-100"}>
            <iframe
              src="https://jobs.orcaloholding.co.uk/jobs/companies/G2Ld43no9XY7X87Rv61yQwrKza"
              width="100%"
              height="100%"
              no-border
              title="Jobs Widget"
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Careers;
