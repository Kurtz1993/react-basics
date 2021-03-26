import { useState } from 'react';

interface CounterAppProps {
  value?: number;
}

const CounterApp = ({ value = 0 }: CounterAppProps) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={() => setCounter(current => current + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setCounter(current => current - 1)}>
        -1
      </button>
      <button type="button" onClick={() => setCounter(value)}>
        Reset
      </button>
    </>
  );
};

export default CounterApp;
