import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Clock.module.scss';

const Clock = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
         function tick() {
          setDate(new Date());
         }
    return (
        <div className={styles.clock}>
            <h2>{date.toDateString()}</h2>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
};

export default Clock;