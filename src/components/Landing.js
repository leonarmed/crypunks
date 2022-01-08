// Library
import React from 'react';

// Components
import { Container } from 'react-bootstrap';
import Header from './Header';
import Banner from './Banner';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

      return (
        <Container>
          <Header />
          <Banner />
        </Container>
      );
    }
}


export default Landing; 