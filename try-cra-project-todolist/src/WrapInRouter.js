import React from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Home from './component/Home'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import SinglePage from './component/SinglePage'

class WrapInRouter extends React.Component {
  render(){
    return (
      <div>
        <header className="App-header">
          TASK REACT MITRAIS
        </header>
        <BrowserRouter>
          <Navigation />
          <Switch>
              <Route exact path="/" render={(props)=>  <SinglePage {...props} text="this is home"/>} />
              <Route exact path="/create_player" render={(props)=>  <Home {...props} />} />
              <Route path="/" render={(props)=>  <SinglePage {...props} text="are you lost"/>} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default WrapInRouter;
