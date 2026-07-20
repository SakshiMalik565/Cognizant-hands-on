import React, { Component } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ''
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  sayHello = () => {
    this.setState({ message: 'Hello! Welcome to Event Handling in React.' });
  };

  handleMultiple = () => {
    this.incrementCounter();
    this.sayHello();
  };

  sayWelcome = (arg) => {
    alert(`Greeting message: ${arg}`);
  };

  handleSyntheticEvent = (event) => {
    alert('Synthetic Event (OnPress): I was clicked!');
    console.log('Event type:', event.type);
  };

  render() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h2>React Event Examples Application</h2>
        <h3>Counter Value: {this.state.counter}</h3>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={this.handleMultiple}>Increase & Say Hello</button>
          <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
          <button onClick={this.handleSyntheticEvent}>OnPress Synthetic Event</button>
        </div>

        {this.state.message && <p style={{ color: '#007bff', fontWeight: 'bold' }}>{this.state.message}</p>}

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
