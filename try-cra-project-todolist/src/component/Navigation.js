import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li className="left_float">
          <Link to="/">Home</Link>
        </li>
        <li className="left_float">
          <Link to="/create_player">Create Player</Link>
        </li>
        <li className="right_float">logout</li>
      </ul>
      <div className="clear_left"></div>
    </nav>
  );
}

export default Navigation;
