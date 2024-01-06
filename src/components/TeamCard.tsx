import { TEAM_DATA } from "@/lib/data";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Card, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

type TeamCardProps = (typeof TEAM_DATA)[number];

const TeamCard: FunctionComponent<TeamCardProps> = ({
  title,
  linkedIn,
  github,
  imageUrl,
}) => {
  return (
    <Card>
      <Image
        src={imageUrl}
        className="card-img-top team-image"
        alt={title}
        quality={95}
      />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <hr />
        <a
          className="text-decoration-none mx-3 h3"
          href={linkedIn}
          target="_blank"
          style={{ color: "#0077B5" }}
        >
          <FaLinkedin />
        </a>
        <a
          className="text-decoration-none mx-3 h3"
          href={github}
          target="_blank"
          style={{ color: "#f57b02" }}
        >
          <FaSquareGithub />
        </a>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
