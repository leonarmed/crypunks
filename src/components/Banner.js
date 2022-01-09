// Library
import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';

// Css & Pics
import '../assets/scss/banner.scss'
import bot from '../assets/img/bot-header.png';


class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

      return (
      <>
        <Row className='banner d-flex'>
          <Col xs="12" sm="5" className="text-center l-panel">
            <Row>
              <h1>fight for freedom</h1>
              <h3>Own a fighter, participate in fight, earn tokens and win the glory!</h3>
            </Row>
            <Row className="d-flex justify-content-center">
              <div className="btn-container">
                <Button className="btn-connect">Play now<div className="figure"></div></Button>
              </div>
              <div className="btn-container">
                <Button className="btn-outline-without-corner">Join</Button>
                <div className="figure"></div>
              </div>
            </Row>
          </Col>
          <Col xs="12" sm="7" className="r-panel">
            <Image src={bot} width={850}/>
          </Col>
        </Row>
      </>
      );
    }
}


export default Banner; 