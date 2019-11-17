import React from 'react';


function Oke(){
  alert('woe')
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li onClick={() => Oke()} className="left_position">login</li>
        <li className="left_position">create a task</li>
        <li className="right_position">logout</li>
      </ul>
      <div className="clear"></div>
    </nav>
  );
}

export default Navigation;
