import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    console.log('constructor phase');

    super(props);
    this.state = {
      firstName: 'Ahmed',
      lastName: 'Hossam',
    };
  }
  render() {
    console.log('render phase');
    return (
      <>
        <h1>Hello, class Component, {this.props.name}</h1>
        <p>i am {this.props.age}</p>
        <p>i am {this.props.title}</p>
        <h6>
          Created by, {this.state.firstName} {this.state.lastName}
        </h6>
        <button
          onClick={() => {
            this.setState({
              firstName: 'dada',
            });
          }}
        >
          Change my name
        </button>
      </>
    );
  }

  componentDidMount() {
    this.setState({
      lastName: 'Aldod',
    });
    console.log('componentDidMount phase');
  }
}

export default Welcome;
