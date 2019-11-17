import React from 'react';


function Oke(){
  alert('woe')
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li onClick={() => Oke()} className="left_float">login</li>
        <li className="left_float">create a task</li>
        <li className="right_float">logout</li>
      </ul>
      <div className="clear_left"></div>
    </nav>
  );
}

export default Navigation;
