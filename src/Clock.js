import React, {useState, useEffect} from 'react'

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date);

  const tick = () => (setCurrentTime(new Date));

  useEffect(() => {
    let int = setInterval(() => tick(), 1000);
    return () => (clearInterval(int));
  });

  return(
    <h2 className="clock">{currentTime.toLocaleTimeString()}</h2>
  );
};

export default Clock;

