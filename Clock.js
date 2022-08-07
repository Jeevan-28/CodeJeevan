
import React from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {
    const [clockstate, setClockState] = useState();

    useEffect(() => {
    
setInterval(()=> {
    const date = new Date();
    setClockState(date.toLocaleTimeString());
}, 1000)

    }, [])
    
  return (
    <div className='clockstyle' style={{margin: "40px", fontFamily: "Times New Roman"} }>
        {clockstate}
    </div>
  )
}

export default Clock