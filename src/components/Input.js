import { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState();
  return (
    <>
      <label>{props.label}</label>
      <br />
      <span>{value}</span>
      <br />
      <input
        type={props.type}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};

export default Input;
