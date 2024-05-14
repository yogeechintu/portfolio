import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <div className="waviy">
              <span style={{ "--i": 1 }}>Y</span>
              <span style={{ "--i": 2 }}>O</span>
              <span style={{ "--i": 3 }}>G</span>
              <span style={{ "--i": 4 }}>E</span>
              <span style={{ "--i": 5 }}>E</span>            
              <span style={{ "--i": 10 }}> </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              {/* <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yogeeshwar-reddy-996a7223b" target="_blank" >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/yogee_chintu_0146" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
                <a href="https://twitter.com/Yogee_Chintu" target="_blank"><img src={navIcon2} alt="Twitter" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd" >< a href="https://twitter.com/"> <span>Let’s Connect</span></a></button>
              </HashLink> */}
              {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <button className="vvd"><span>Let’s Connect</span></button> */}
                <a href="mailto:yogeereddy143@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email">
    <button className="vvd"><span>Let’s Connect</span></button>
</a>

              {/* </a> */}

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
