import { useState, useEffect } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p className="text-lg text-black font-normal">{currentTime.toLocaleTimeString('en-GB', { timeZone: 'Europe/Paris' })}</p>
    </div>  
  )
}

export default CurrentTime