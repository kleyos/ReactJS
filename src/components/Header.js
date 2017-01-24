import React from 'react';

function Header() {
  const time  = ['00:00', '03:00', '06:00','09:00','12:00','15:00','18:00','21:00'];
  const timeRow = time.map((t,index) => <div key={index} className='time-cell'>&nbsp;&nbsp;{t}</div>);

  return (
    <div>
    <h3> SET SCHEDULE </h3>
     <div className='first-cell'>ALL DAY</div>
     <div className='time-line'> {timeRow}</div>
    </div>
  )
}

export default Header;