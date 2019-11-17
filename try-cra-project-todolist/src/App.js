import React from 'react';
import Navigation from './component/Navigation'
import Content from './component/Content'
import Footer from './component/Footer'
import axios from 'axios'
import './Global.css'

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        peoples:[]
    }
  }

  componentDidMount(){
    axios.get("https://swapi.co/api/people")
    .then(hasil =>{
      this.setState({peoples:hasil.data.results})
    })
    .catch(err =>{
      console.log("error", err)
    })
  }

  editButton(people){
    alert(people.name)
  }

  deleteButton(value){
    let tmp = this.peoples.filter(people => {
      return people.name !== value.name
    })
    this.setState({peoples:tmp})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          TASK REACT MITRAIS
        </header>
        <Navigation />
        <Content peoples={this.state.peoples} edit_button={this.editButton} delete_button={this.deleteButton}/>
        <Footer />
      </div>
    );
  }
}

export default App;
