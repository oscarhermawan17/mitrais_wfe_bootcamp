import React, { lazy, Suspense } from 'react';
// import Content from './Content'
import axios from 'axios'
import './Global.css'

const Content = lazy(() => import('./Content'))

class CreatePlayer extends React.Component {
  constructor(){
    super()
      this.state = {
        peoples:[],
        modal:"display_none modal",
        edit_people:{},
    }
    // dont use "bind" like below, if you already using "() => ()"  when u called function. example onClick={() => this.function()}
    // this.submitData = this.submitData.bind(this)
  }

  componentDidMount(){
    // axios get, for get data from localhost
    axios.get("http://localhost:3001/")
    .then(hasil =>{
      this.setState({peoples:hasil.data})
    })
    .catch(err =>{
      console.log("error", err)
    })
  }

  editButton(people){
    this.setState({edit_people:people}, () => this.setState({modal:"modal"}))
  }

  deleteButton(value){
    let tmp = this.state.peoples.filter(people => {
      return people.name !== value.name
    })
    this.setState({peoples:tmp})
  }

  cancelEdit(){
    this.setState({modal:"display_none modal"})
  }

  onChangeValue(e){
    this.setState({edit_people:{...this.state.edit_people, name:e.target.value}}, () => console.log(this.state.edit_people))
  }

  submitData(){
    let tmp = this.state.peoples.map(people=> people.id === this.state.edit_people.id ? this.state.edit_people : people)
    this.setState({peoples:tmp}, () => {
      alert("success change data")
      this.setState({modal:"display_none modal"})
    })
  }

  render(){
    return (
      <div className="App">
        <div className={this.state.modal}>
          <div className="modal-content">
            Edit Name Content
            <div>
                Name:
                <input type="text" name="name" defaultValue={this.state.edit_people.name} onChange={(e) => this.onChangeValue(e)} />
                <div>
                  <button onClick={() => this.submitData()}>submit</button>
                  <button onClick={() => this.cancelEdit()}>cancel</button>
                </div>
            </div>   
          </div>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <Content peoples={this.state.peoples} edit_button={(value) => this.editButton(value)} delete_button={(value) => this.deleteButton(value)}/>
          {/* <Content peoples="testing PropType" edit_button={(value) => this.editButton(value)} delete_button={(value) => this.deleteButton(value)}/>  */}
        </Suspense>
      </div>
    );
  }
}

export default CreatePlayer;
