// Library
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Icons
import { FaTelegramPlane, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';

// Css & Pics
import '../assets/scss/footer.scss'
import logo from '../assets/img/ico.png';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

      return (
        <div className="footer">
          <Row className="d-flex justify-content-between">
            <Col xs="5" sm="3" className="social-container">
            <div className="figure"></div>
              <Row className="icons">
                <Col xs="3"><FaTelegramPlane/></Col>
                <Col xs="3"><FaTwitter/></Col>
                <Col xs="3"><FaYoutube/></Col>
                <Col xs="3"><FaDiscord/></Col>
              </Row>
            </Col>
            <Col xs="5" sm="3" className="text-right">
              Next section
            </Col>
          </Row>
        </div>
      );
    }
}


export default Header; 