import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row><p></p></Row>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yashisaxena1234ys/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Yashi-sCS"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Contact me : yashi.saxena2021@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
