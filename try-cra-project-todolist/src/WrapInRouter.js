import React from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import CreatePlayer from './component/CreatePlayer'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import SinglePage from './component/SinglePage'

// const CreatePlayer = lazy(() => import('./component/CreatePlayer'))


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
              <Route exact path="/create_player" render={(props)=> <CreatePlayer {...props} />}/>
              <Route path="/" render={(props)=>  <SinglePage {...props}/>} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default WrapInRouter;
