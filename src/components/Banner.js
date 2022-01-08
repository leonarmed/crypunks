// Library
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

// Css & Pics
import '../assets/scss/banner.scss'
import logo from '../assets/img/ico.png';


class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

      return (
        <Row className='banner d-flex align-items-center m-0'>
          <Col xs={12} sm={5} className="text-center">
            <div>
              <h1>fight for freedom</h1>
              <h3>Own a fighter, participate in fight, earn tokens and win the glory!</h3>
            </div>
            <div className="d-flex justify-content-center">
              <div className="btn-container">
                <Button className="btn-connect">Play now<div className="figure"></div></Button>
              </div>
              <div className="btn-container">
                <Button className="btn-outline-without-corner">Join</Button>
                <div className="figure"></div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={5}>
            img
          </Col>
        </Row>
      );
    }
}


export default Banner; 