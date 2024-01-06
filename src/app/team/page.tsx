"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { TEAM_DATA } from "@/lib/data";
import TeamCard from "@/components/TeamCard";

const Team = () => {
  return (
    <main>
      <Container>
        <Row>
          <h2 className="text-center text-white">Team JingleSeconds</h2>
        </Row>
        <Row>
          {TEAM_DATA.map((member) => (
            <Col key={member.title} xs={12} md={4} className="mt-4">
              <TeamCard {...member} />
            </Col>
          ))}

          {/* Repeat the above structure for other team members */}
        </Row>
      </Container>
    </main>
  );
};

export default Team;
