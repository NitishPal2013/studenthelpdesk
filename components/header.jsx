import React from 'react';
import './header2.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function header() {
  function Logo() {
    return (<div className="name"><span className="title" id="l1">S</span><span className="title" id="l2">T</span><span className="title" id="l3">U</span><span className="title" id="l4">D</span><span className="title" id="l1">E</span><span className="title" id="l5">N</span><span className="title" id="l6">T</span><span className="title" id="l1">&nbsp;H</span><span className="title" id="l7">E</span><span className="title" id="l8">L</span><span className="title" id="l9">P</span><span className="title" id="l10">&nbsp;D</span><span className="title" id="l11">E</span><span className="title" id="l12">S</span><span className="title" id="l13">K</span></div>);
    }

  return (
    <>
        {/* <div id="notice">
        Developing this website and uploading more useful content! So stay connected! THANKYOU!!
    </div> */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/computer_science"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <NavDropdown title="Subjects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/computer_science">Computer Science</NavDropdown.Item>
                <NavDropdown.Item href="/mathematics">Mathematics</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
  )
}
