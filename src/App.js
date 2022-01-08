// Library
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers/History';
import { Container } from 'react-bootstrap';

// Components
import Landing from './components/Landing';

// Css
import './assets/scss/app.scss';

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {}
  }

  render = () => {
  return (
    <Router forceRefresh={true} history={history} >
      <Container>
          <Switch> 
            <Route exact path="/" component={Landing} />
          </Switch>
      </Container>
    </Router>
    );
  }
}

export default App;