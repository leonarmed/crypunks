// Library
import React from 'react';

// Components
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
        <>
          <Header />
          <Banner />
        </>
      );
    }
}


export default Landing; 