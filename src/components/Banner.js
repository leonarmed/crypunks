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
        <Row className='banner d-flex align-items-center'>
          <Col xs={5} className="text-center">
            <div>
              <h1>fight for freedom</h1>
              <h3>Own a fighter, participate in fight, earn tokens and win the glory!</h3>
            </div>
            <div>
              <Button>play now</Button>
              <Button>join</Button>
            </div>
          </Col>
          <Col xs={7}>
            img
          </Col>
        </Row>
      );
    }
}


export default Banner; 