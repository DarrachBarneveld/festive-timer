"use client";

import React, { FunctionComponent } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { COUNTRY_INFORMATION } from "@/lib/data";

interface PageProps {
  params: { country: string };
}

const MainSection: FunctionComponent<PageProps> = ({ params }) => {
  const { heading, excerpt, sections, id } = COUNTRY_INFORMATION.find(
    (country) => country.id === params.country
  )!;
  return (
    <main>
      <div className="hero-section">
        <div id="timer-image" className="container-fluid">
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={8}
              className="d-flex justify-content-center align-items-center"
              style={{ height: "500px" }}
            >
              <div className="col-12 col-md-10 d-flex justify-content-center">
                {/* Timer Containers */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <section className="main-content">
        <h2 className="text-center mt-3 fw-bold my-3 text-white">{heading}</h2>
        <Container className="mb-5">
          <Row className="mt-4 justify-content-center">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Image
                className="img-fluid fact-image"
                src="../assets/images/bread.webp"
                alt="Image of bread"
              />
            </Col>
            <Col xs={12} md={8} className="mt-3 mt-md-0">
              <div className="d-flex">
                <i
                  className="fa-solid fa-lightbulb fa-fade fa-2xl me-4"
                  style={{ color: "#fbb85b" }}
                ></i>
                <p className="fw-bolder fs-3 text-white">Did you know?</p>
              </div>

              <p className="text-white">{excerpt}</p>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row className="my-5 fact-container">
            <h2 className="text-center mb-5 text-white">
              3 Best Places in Ireland for New Year’s Eve
            </h2>
            <Col xs={12} md={6} className="left-anim">
              <p className="fw-bold text-white">1. Dublin</p>
              <p className="text-white">
                On New Year’s Day, the capital city of Ireland becomes one huge
                venue for New Year celebrations and merriment. There’s something
                for everyone in the annual New Year’s Festival Dublin, and it is
                open to people of all ages.
                <br />
                Meeting House Square in Temple Bar, Dublin’s cultural epicenter,
                is hosting a party with live music this afternoon. Here, you can
                treat your senses to the spectacle of interactive art
                installations or groove to live music and street performances.
                You may also affix your New Year’s resolutions to the designated
                Resolution Tree.
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center right-anim"
            >
              <Image
                className="img-fluid location-image"
                src="../assets/images/dublin.webp"
                alt="Dublin"
              />
            </Col>
          </Row>

          <Row className="my-5 fact-container2">
            <Col xs={12} md={6} className="order-1 order-md-2 right-anim">
              <p className="fw-bold text-white">
                2. Pub Crawl In Galway City, Co Galway
              </p>
              <p className="text-white">
                Every weekend of the year is a good time to visit Galway, but
                it’s an especially fun time to visit during the New Year’s Eve
                party. This old city in the west knows how to throw a good
                party, so you have a lot to look forward to in the coming New
                Year.
                <br />
                Everywhere you go, you’ll hear live music and see a diverse
                population of partygoers from all over Ireland and the world.
                All these things contribute to that special party vibe that
                makes Galway so well-known for celebrations. And if you’re here
                to celebrate the coming year, don’t settle in one place. Explore
                the many cool venues and party your way around Galway’s with a
                new year’s eve pub crawl.
              </p>
            </Col>
            <Col xs={12} md={6} className="order-2 order-md-1 left-anim">
              <Image
                className="img-fluid location-image"
                src="../assets/images/galway.webp"
                alt="Galway"
              />
            </Col>
          </Row>

          <Row className="my-5 fact-container">
            <Col xs={12} md={6} className="left-anim">
              <p className="fw-bold text-white">
                3. Watch the fireworks in Dingle, Co Kerry
              </p>
              <p className="text-white">
                Dingle’s New Year’s Eve celebrations are legendary and for good
                reason. They feature a heady cocktail of authentic Irish
                merriment, grand spectacles like fireworks and parades, and a
                wild party vibe.
                <br />
                Indeed, Dingle is a town that knows how to have a good time, as
                seen by the abundance of bars playing traditional Irish music
                that line its streets. On the eve of the New Year, however,
                thousands of people flock to the streets of the town center to
                ring in the new year in typical Kerry fashion.
              </p>
            </Col>
            <Col xs={12} md={6} className="right-anim">
              <Image
                className="img-fluid location-image"
                src="../assets/images/dingle.webp"
                alt="Dingle, Kerry"
              />
            </Col>
          </Row>
        </Container>{" "}
      </section>
    </main>
  );
};

export default MainSection;
