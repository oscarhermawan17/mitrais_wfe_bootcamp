import React from 'react';

class Content extends React.Component {
  constructor(){
    super()
      this.state = {
        peoples:[]
    }
  }

  render(){
    return (
      <article>
        {
          this.props.peoples.length === 0 ? null : 
          this.props.peoples.map((people,id) =>
            <div key={id} className="container_box left_float">
              <div className="box">
                <div className="box_title">People</div>
                <p>Name : {people.name}</p>
                <div className="container_button right_float">
                  <button className="success" onClick={() => this.props.edit_button(people)}>Edit</button>
                  <button className="danger" onClick={() => this.props.delete_button(people)}>Delete</button>
                </div>
                <div className="clear_right"></div>
              </div>
            </div>  
          )
        }
        <div className="clear_left"></div>
      </article>
    );
  }
}

export default Content;
