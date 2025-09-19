import { useEffect, useState } from 'react';
import './clock.css'

export default function Clock() {
  const [dateTime, setDateTime] = useState({ time: '', date: '' });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      const time = `${hours} : ${minutes} : ${seconds}`;

      const day = now.toLocaleDateString('en-IN', { weekday: 'long' });
      const date = now.getDate().toString().padStart(2, '0');
      const month = now.toLocaleDateString('en-IN', { month: 'long' });
      const year = now.getFullYear();

      const dateStr = `${day}, ${date} ${month} ${year}`;

      setDateTime({ time, date: dateStr });
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className='clock-time'>{dateTime.time}</div>
      <div className='clock-date'>{dateTime.date}</div>
    </div>
  );
}