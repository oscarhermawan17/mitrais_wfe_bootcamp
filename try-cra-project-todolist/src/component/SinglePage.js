import React from 'react';

const SinglePage = (props) => {
  return (
    <div className="lost_page">
        {props.location.pathname === "/" ? "Home" : <div>Are you Lost ? <br/> 404 </div>}
    </div>
  );
}
export default SinglePage;
