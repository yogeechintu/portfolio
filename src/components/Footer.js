import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ height: '100px' }}> {/* Adjust the height as needed */}
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          
          <Col size={12} sm={6}>
          <div className="waviy">
              <span style={{ "--i": 1 }}>Y</span>
              <span style={{ "--i": 2 }}>O</span>
              <span style={{ "--i": 3 }}>G</span>
              <span style={{ "--i": 4 }}>E</span>
              <span style={{ "--i": 5 }}>E</span>
              <span style={{ "--i": 10 }}> </span>
            </div>
          </Col>
          <br /><br /><br /><br />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/yogeeshwar-reddy-996a7223b" target="_blank" >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/yogee_chintu_0146" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://twitter.com/Yogee_Chintu" target="_blank"><img src={navIcon2} alt="Twitter" /></a>
            </div>
       
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
