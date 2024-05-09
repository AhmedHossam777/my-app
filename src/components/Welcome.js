const Welcome = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <p> i am {props.age} years old</p>
      <p>i am a {props.title}</p>
    </>
  );
};

export default Welcome;
