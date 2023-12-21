import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ExploreX",
      time: "March, 2023 - April, 2023",
      description:
        "Utilizes Google Maps API and Google Places API to architect and construct a full-stack travel application. Incorporates geolocation technology for dynamic retrieval of real-time data on nearby hotels, attractions, and restaurants, enhancing the user's travel experience.",
      imgUrl: projImg1,
      link: "https://github.com/Yashi-sCS/exploreX"
    },
    {
      title: "RenteX",
      time: "September, 2023 - Present",
      description:
        "A dynamic online platform facilitating rentals for a wide range of products, spanning electronic gadgets, household furniture, and appliances. Having a strategically curated extensive product catalog to cater to diverse customer and lender needs, focusing on delivering exceptional user experiences.",
      imgUrl: projImg2,
      link: "https://github.com/Yashi-sCS/RENTEX"
    },
    {
      title: "Drawfinity",
      time: "May, 2023 - June, 2023",
      description:
        "An Android drawing app, using Flutter's CustomPaint widget. Empowers users to express their creativity by choosing from a diverse palette of colors, adjusting stroke and eraser sizes, and selecting various shapes with fill options. Incorporates a user-friendly feature enabling direct image saving to the device's gallery for added convenience.",
      imgUrl: projImg3,
      link: "https://github.com/Yashi-sCS/drawfinity"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These projects embody a commitment to thoughtful solutions
                    in every line of code. From designing user-friendly web
                    interfaces to building reliable systems, each project
                    showcases a dedication to practical problem-solving. Explore
                    my project showcase to see the intersection of technical
                    skills & creative solutions. 🛠️🚀
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Project Cards <br></br> (Click for source code)
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  );
};
