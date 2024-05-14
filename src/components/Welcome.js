import { useState } from 'react';

const Welcome = (props) => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState('Ahmed');
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <p> i am {props.age} years old</p>
      <p>i am a {props.title}</p>

      <h6>{counter}</h6>
      <h6>{name}</h6>

      <button
        onClick={() => {
          setCounter(counter++);
        }}
      >
        inc counter
      </button>

      <button
        onClick={() => {
          setName('dada');
        }}
      >
        Change name
      </button>
    </>
  );
};

export default Welcome;
