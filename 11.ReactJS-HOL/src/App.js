import React, { Component } from "react";
import CurrencyConvertor from "./Components/CurrencyConvertor";

class App extends Component {

  constructor() {

    super();

    this.state = {

      count: 0

    };

  }

  increment = () => {

    this.setState({

      count: this.state.count + 1

    });

  };

  decrement = () => {

    this.setState({

      count: this.state.count - 1

    });

  };

  sayHello = () => {

    alert("Hello! Have a nice day!");

  };

  incrementAndHello = () => {

    this.increment();

    this.sayHello();

  };

  sayWelcome = (msg) => {

    alert(msg);

  };

  onPress = () => {

    alert("I was clicked");

  };

  render() {

    return (

      <div style={{ textAlign: "center" }}>

        <h1>Event Examples App</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.incrementAndHello}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />

      </div>

    );

  }

}

export default App;