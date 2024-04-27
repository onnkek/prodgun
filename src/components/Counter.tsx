import React from "react";
import { useState } from "react";
import styles from './Counter.module.sass';

export const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.button} onClick={increment}>increment</button>
    </div>
  )
}