// Library
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

// Css & Pics
import '../assets/scss/header.scss'
import logo from '../assets/img/ico.png';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

      return (
        <Navbar bg="dark" variant="dark" expand="lg" className="header">
          <Container>
            <Navbar.Brand href="#home" className='logo'>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            crypunks
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
              <Nav className="ml-4">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#story">Story</Nav.Link>
                <Nav.Link href="#bots">Bots</Nav.Link>
                <Nav.Link href="#roadmap">Road Map</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <Nav.Link href="#marketplace">Marketplace</Nav.Link>
              </Nav>
              <div className="btn-container">
                
                <Button className="btn-connect">Connect Wallet<div className="figure"></div></Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
}


export default Header; 