import React from 'react';
import Navigation from './component/Navigation'
import Content from './component/Content'
import Footer from './component/Footer'
import './Global.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      task : []
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          TASK REACT MITRAIS
        </header>
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
