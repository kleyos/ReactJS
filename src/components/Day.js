import React from 'react';

function Day(props) {
 
   return (
     <div className="name-day">{props.day.toUpperCase()}</div>
    );
}

export default Day;