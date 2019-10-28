import React from "react";
import SimpsonQuotes from "./Components/SimpsonQuotes";
import axios from "axios";
import "./App.css";

const sampleSimpson = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: sampleSimpson };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes?count=num")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          quotes: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <SimpsonQuotes quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
