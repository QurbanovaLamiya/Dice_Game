import React from "react";
import { Game } from "./Components/Game";
import { Interface } from "./Components/Interface";
import { Player1 } from "./Components/Player1";
import { Player2 } from "./Components/Player2";

import "./App.css";

class App extends React.Component {
 constructor(){
  super()

  this.state = {
    
    Player1: "",
    Player2: "",
    one:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    two:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
      three:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
      four:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
      five:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
      six:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"
    };
  }
  player2Choise = () => {
    this.setState({
      player2Choise: Math.floor(Math.random() * 6) + 1
    });
  };

  startGame = () => {
    this.setState({
     player1Choise: Math.floor(Math.random() * 6) + 1,
     
    });

    this.player2Choise();
  };

  clearState = () => {
    
    this.setState({
      player1Choise: "",
      player2Choise: "",
    
    });
  };

  render() {
    return (
      <>
        <h1 className="gameTitle">The Dice Game</h1>
        <Interface
          games={this.state.games}
          clearState={this.clearState}
          startGame={this.startGame}
          player1Choise={this.state.player1Choise}
          player2Choise={this.state.player2Choise}
        />
        <div className="effects">
          <Player1 allstates={this.state} />
          <Player2 allstates={this.state} />
        </div>
        <Game results={this.state} />
      </>
    );
  }
}

export default App;