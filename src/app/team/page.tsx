"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Team = () => {
  return (
    <main>
      <section>
        <Container>
          <Row>
            <h2 className="text-center text-white">Team JingleSeconds</h2>
          </Row>
          <Row>
            <Col xs={12} md={4} className="mt-4">
              <Card>
                <Card.Img
                  src="../assets/images/team/darrach.jpeg"
                  className="card-img-top team-image"
                  alt="Darrach Barneveld"
                />
                <Card.Body className="text-center">
                  <Card.Title>Darrach Barneveld</Card.Title>
                  <hr />
                  <a
                    className="text-decoration-none"
                    href="https://www.linkedin.com/in/darrach-barneveld-2b493511b/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin fa-lg"></i> LinkedIn
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://github.com/DarrachBarneveld"
                    target="_blank"
                  >
                    <i className="fa-brands fa-square-github fa-lg"></i> GitHub
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Repeat the above structure for other team members */}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Team;
