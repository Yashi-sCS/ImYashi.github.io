import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, time, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link} style={{ color: "inherit", textDecoration: "none" }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <h6>({time})</h6>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
